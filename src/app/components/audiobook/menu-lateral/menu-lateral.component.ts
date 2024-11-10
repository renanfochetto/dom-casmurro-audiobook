import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AudioService } from "../../../services/audio.service";
import { AudioData } from "../../../interfaces/audiodata.interface";
import { NgClass } from "@angular/common";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-menu-lateral',
  standalone: true,
  templateUrl: './menu-lateral.component.html',
  imports: [
    NgClass,
    CommonModule
  ],
  styleUrl: './menu-lateral.component.css'
})
export class MenuLateralComponent implements OnInit{
  @Output() capituloSelecionado: EventEmitter<number> = new EventEmitter<number>();
  public capitulos: AudioData[] = [];
  public isMenuVisible: boolean = false;

  constructor(private audioService: AudioService) {}

  ngOnInit(): void {
    this.capitulos = this.audioService.getAudios();
    console.log(this.capitulos)
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  selectChapter(index: number) {
    this.capituloSelecionado.emit(index);
    this.toggleMenu();
  }

}
