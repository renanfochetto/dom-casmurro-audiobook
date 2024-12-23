import { Component, OnInit, ViewChild } from '@angular/core';
import { AudioplayerComponent } from "./audioplayer/audioplayer.component";
import { AudioService } from "../../services/audio.service";
import { AudioData } from "../../interfaces/audiodata.interface";
import { MenuLateralComponent } from "./menu-lateral/menu-lateral.component";
import { TranscricaoComponent } from "./transcricao/transcricao.component";
import { BackToTopComponent } from "../back-to-top/back-to-top.component";

@Component({
  selector: 'app-audiobook',
  standalone: true,
  imports: [AudioplayerComponent, MenuLateralComponent, TranscricaoComponent, BackToTopComponent],
  templateUrl: './audiobook.component.html',
  styleUrl: './audiobook.component.css'
})
export class AudiobookComponent implements OnInit{
  public currentAudioIndex: number = 0;
  public audioData: AudioData = this.audioService.getAudios()[this.currentAudioIndex];

  @ViewChild(TranscricaoComponent) transcricaoComponent!: TranscricaoComponent;
  @ViewChild(AudioplayerComponent) audioplayerComponent!: AudioplayerComponent;

  constructor(private audioService: AudioService) {}

  ngOnInit() {
    this.loadCurrentAudio();
  }

  loadCurrentAudio(): void {
    this.audioData = this.audioService.getAudios()[this.currentAudioIndex];
  }

  onCapituloMudou(novoIndex: number): void {
    this.currentAudioIndex = novoIndex;
    this.loadCurrentAudio();
    this.audioplayerComponent.resetPlayer();
    this.resetTranscricao();
  }

  nextAudio(): void {
    if (this.currentAudioIndex < this.audioService.getAudios().length - 1) {
      this.currentAudioIndex++;
      this.loadCurrentAudio();
    }
  }

  previousAudio(): void {
    if(this.currentAudioIndex > 0) {
      this.currentAudioIndex--;
      this.loadCurrentAudio();
    }
  }

  audioTerminou(): void {
    this.nextAudio();
    this.resetTranscricao();
  }

  selectChapter(index: number): void {
    this.currentAudioIndex = index;
    this.loadCurrentAudio();
    this.audioplayerComponent.resetPlayer();
    this.resetTranscricao();
  }

  resetTranscricao(): void {
    if(this.transcricaoComponent) {
      this.transcricaoComponent.resetEstado()
    }
  }

}
