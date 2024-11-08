import {Component, Input, OnInit, OnDestroy, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NgIf } from "@angular/common";
import { TranscricaoComponent } from "../transcricao/transcricao.component";
import { AudioService } from "../../../services/audio.service";

@Component({
  selector: 'app-audioplayer',
  standalone: true,
  templateUrl: './audioplayer.component.html',
  imports: [
    FormsModule,
    NgIf,
    TranscricaoComponent
  ],
  styleUrl: './audioplayer.component.css'
})
export class AudioplayerComponent implements OnInit, OnDestroy, OnChanges {
  @Input() audioSrc: string = '';
  @Input() audioIndex: number = 0;
  @Output() capituloMudou: EventEmitter<number> = new EventEmitter<number>();
  @Output() audioTerminou: EventEmitter<void> = new EventEmitter<void>();

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
  selectedSpeed: number = 1;

  constructor(private audioService: AudioService) {}

  ngOnInit(): void {
    this.initializeAudio();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['audioIndex'] && this.audioIndex !== changes['audioIndex'].currentValue) {
      console.log('Capítulo mudou:', this.audioIndex);
      this.initializeAudio();
      this.updateNavigateButtons();
    }
  }

  private updateNavigateButtons(): void {
    this.isPreviousDisabled = this.audioIndex === 0;
    this.isNextDisabled = this.audioIndex === this.audioService.getAudios().length - 1;
  }

  ngOnDestroy(): void {
    this.cleanupAudio();
  }

  private initializeAudio(): void {
    console.log('Inicializando audio:', this.audioIndex);
    if(this.audioElement) {
      console.log(this.audioElement)
      this.cleanupAudio();
    }
    if (this.audioIndex >= 0 && this.audioIndex < this.audioService.getAudios().length) {
      this.audioSrc = this.audioService.getAudios()[this.audioIndex].src;
      this.audioElement = new Audio(this.audioSrc);
      this.audioElement.preload = 'auto';
      this.audioElement.onloadedmetadata = (): void => {
        this.duration = this.audioElement.duration;
      };
      this.audioElement.ontimeupdate = (): void => {
        this.currentTime = this.audioElement.currentTime;
        this.progressWidth = `${(this.currentTime / this.duration) * 100}%`;
      };
      this.audioElement.onended = (): void => {
        this.audioTerminou.emit();
      };
    }
  }

  private cleanupAudio (): void {
    if(this.audioElement) {
      this.audioElement.pause();
      this.audioElement.src = '';
      this.audioElement.load();
      console.log('Audio limpo');
    }
  }

  togglePlayPause(): void {
    if (this.isPlaying) {
      this.audioElement.pause();
    } else {
      this.audioElement.play().catch((error) => {
        console.error('Error playing audio:', error);
      });
    }
    this.isPlaying = !this.isPlaying;
  }

  skip(seconds: number) {
    this.audioElement.currentTime += seconds;
  }

  nextChapter(): void {
    this.audioTerminou.emit();
    this.resetPlayer();
    this.audioIndex = this.audioIndex + 1;
    this.capituloMudou.emit(this.audioIndex);
    this.updateNavigateButtons();
    this.initializeAudio()
  }

  previousChapter(): void {
    this.audioTerminou.emit();
    this.resetPlayer();
    this.audioIndex = this.audioIndex - 1;
    this.capituloMudou.emit(this.audioIndex);
    this.updateNavigateButtons()
    this.initializeAudio()
  }

  resetPlayer(): void {
    this.currentTime = 0;
    this.progressWidth = '0%';
    this.isPlaying = false;
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement.currentTime = 0;
    }
    this.isSpeedControlVisible = false;
  }

  toggleSpeedControl() {
    this.isSpeedControlVisible = !this.isSpeedControlVisible;
    console.log('Visibilidade da lista de velocidades:', this.isSpeedControlVisible);
  }

  changeSpeed(speed: number) {
    this.selectedSpeed = speed;
    if (this.audioElement) {
      this.audioElement.playbackRate = speed;
    }
    this.isSpeedControlVisible = false;
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

  seek(event: MouseEvent) {
    const progressBar = (event.target as HTMLElement).getBoundingClientRect();
    const clickPosition = event.clientX - progressBar.left;
    this.audioElement.currentTime = (clickPosition / progressBar.width) * this.audioElement.duration
  }

  formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
}
