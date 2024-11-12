import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { FormsModule } from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import { TranscricaoComponent } from "../transcricao/transcricao.component";
import { AudioService } from "../../../services/audio.service";

@Component({
  selector: 'app-audioplayer',
  standalone: true,
  templateUrl: './audioplayer.component.html',
  imports: [
    FormsModule,
    NgIf,
    TranscricaoComponent,
    NgForOf
  ],
  styleUrl: './audioplayer.component.css'
})
export class AudioplayerComponent implements OnInit, OnDestroy, OnChanges {
  @Input() audioSrc: string = '';
  @Input() audioIndex: number = 0;
  @Output() capituloMudou: EventEmitter<number> = new EventEmitter<number>();
  @Output() audioTerminou: EventEmitter<void> = new EventEmitter<void>();
  @Output() duracaoCapitulo: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild('transcricaoComponent') transcricaoComponent!: TranscricaoComponent;

  private audioElement!: HTMLAudioElement;

  public isPlaying: boolean = false;
  public currentTime: number = 0;
  public duration: number = 0;
  public volume: number = 1;
  public progressWidth: string = '0%';

  public isPreviousDisabled: boolean = true;
  public isNextDisabled: boolean = false;

  isVolumeControlVisible: boolean = false;
  isSpeedControlVisible: boolean = false;

  speeds: number[] = [0.5, 0.75, 1, 1.25, 1.5, 2]
  selectedSpeed: number = this.speeds[2];

  private mouseDownOnSlider: boolean = false;

  constructor(private audioService: AudioService) {}

  ngOnInit(): void {
    this.initializeAudio();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['audioIndex'] || changes['audioSrc']) {
      this.initializeAudio();
      this.updateNavigateButtons();
      if(this.transcricaoComponent) {
        this.resetTranscricao();
      }
    }
  }

  private updateNavigateButtons(): void {
    this.isPreviousDisabled = this.audioIndex === 0;
    this.isNextDisabled = this.audioIndex === this.audioService.getAudios().length - 1;
  }

  ngOnDestroy(): void {
    this.cleanupAudio();
  }

  public initializeAudio(): void {
    console.log('Initializing audio');
    if(this.audioElement) {
      this.cleanupAudio();
    }
    if (this.audioIndex >= 0 && this.audioIndex < this.audioService.getAudios().length) {
      this.audioSrc = this.audioService.getAudios()[this.audioIndex].src;
      this.audioElement = new Audio(this.audioSrc);
      console.log('Audio element:', this.audioElement);
      this.audioElement.preload = 'auto';
      this.audioElement.playbackRate = this.selectedSpeed;

      this.audioElement.onloadedmetadata = (): void => {
        if(this.audioElement.duration) {
        this.duration = this.audioElement.duration;
          console.log('Audio duration:', this.duration);
      } else {
            console.error('Error loading audio metadata');
        }
      };
      this.audioElement.onloadeddata = (): void => {
        console.log('Loaded data', this.audioElement.readyState);
      }
      this.audioElement.onplay = (): void => {
        this.isPlaying = true;
        console.log('Playing');
      }
      this.audioElement.onended = (): void => {
        console.log('Ended');
        this.resetPlayer();
        this.audioTerminou.emit();
        this.nextChapter();
      };

      this.audioElement.ontimeupdate = (): void => {
        if(!this.mouseDownOnSlider) {
          this.currentTime = this.audioElement.currentTime;
          if(this.currentTime >= this.audioElement.duration) {
            this.currentTime = this.audioElement.duration;
            this.audioElement.pause();
            this.audioTerminou.emit();
            this.nextChapter();
          }
          this.updateProgress();
        }
      };

      this.duracaoCapitulo.emit(this.duration);
    }
  }

  private cleanupAudio (): void {
    if(this.audioElement) {
      this.audioElement.pause();
      this.audioElement.src = '';
      this.audioElement.load();
    }
  }

  togglePlayPause(): void {
    console.log('Toggling play/pause');
    if (this.audioElement.readyState < 2) {
      console.log('Audio not ready');
      return;
    }
    if(this.isPlaying) {
      this.audioElement.pause();
      this.isPlaying = false;
    } else {
      this.audioElement.play().then(() => {
        console.log('Audio playing');
        this.isPlaying = true;
      }).catch((error) => {
        console.error('Error playing audio');
      });
    }
  }

  nextChapter(): void {
    this.audioTerminou.emit();
    this.resetPlayer();
    this.audioIndex = this.audioIndex + 1;
    this.capituloMudou.emit(this.audioIndex);
    this.updateNavigateButtons();
    this.initializeAudio();
    this.resetTranscricao();
  }

  previousChapter(): void {
    this.audioTerminou.emit();
    this.resetPlayer();
    this.audioIndex = this.audioIndex - 1;
    this.capituloMudou.emit(this.audioIndex);
    this.updateNavigateButtons();
    this.initializeAudio();
    this.resetTranscricao();
  }

  resetTranscricao(): void {
    if(this.transcricaoComponent) {
      this.transcricaoComponent.resetEstado();
    }
  }

  resetPlayer(): void {
    this.currentTime = 0;
    this.progressWidth = '0';
    this.isPlaying = false;
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement.currentTime = 0;
    }
    this.isSpeedControlVisible = false;
  }

  toggleSpeedControl() {
    this.isSpeedControlVisible = !this.isSpeedControlVisible;
    console.log(this.isSpeedControlVisible)
  }

  changeSpeed(event: any) {
    const speed = parseFloat(event.target.value);
    this.selectedSpeed = speed;
    if(this.audioElement) {
      this.audioElement.playbackRate = speed;
    }
  }

  toggleVolumeControl() {
    this.isVolumeControlVisible = !this.isVolumeControlVisible;
  }

  adjustVolume() {
    this.audioElement.volume = this.volume;
  }

  toggleMute() {
    if(this.volume === 0) {
      this.volume = 1;
      this.audioElement.volume = this.volume;
    } else {
      this.volume = 0;
      this.audioElement.volume = this.volume;
    }
  }

  seek(event: Event) {
    const input = event.target as HTMLInputElement;
    let newTime = (parseFloat(input.value) / 100) * this.audioElement.duration;

    newTime = Math.min(newTime, this.audioElement.duration);

    this.audioElement.currentTime = newTime;
    this.currentTime = this.audioElement.currentTime;
    this.updateProgress()

    console.log(`[Seek] Atualizado currentTime: ${this.currentTime.toFixed(2)}s`);
    console.log(`[Seek] Barra de progresso: ${this.progressWidth}`);
  }

  onMouseDown(): void {
    this.mouseDownOnSlider = true;
  }

  onMouseUp(): void {
    this.mouseDownOnSlider = false;
  }

  updateProgress(): void {
    if (this.audioElement && this.duration > 0) {
      this.progressWidth = `${Math.min((this.currentTime / this.duration) * 100, 100)}%`;
    }
  }

  formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
}
