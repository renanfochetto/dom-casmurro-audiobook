import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { AudioService } from "../../../services/audio.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-transcricao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transcricao.component.html',
  styleUrl: './transcricao.component.css'
})
export class TranscricaoComponent implements OnInit, OnChanges {
  @Input() capituloIndex: number = 0;

  public texto: string = '';
  public textoExpandido: boolean = false;
  public textoExibido: string = '';

  constructor(private audioService: AudioService) {}

  ngOnInit() {
    this.carregarTexto();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['capituloIndex']){
      this.carregarTexto();
    }
  }

  carregarTexto(): void {
    const caminhoTexto = this.audioService.getTexto(this.capituloIndex);
    if (caminhoTexto) {
      fetch(caminhoTexto)
        .then(response => response.text())
        .then(text => {
          this.texto = text.replace(/\n/g, '<br>');
          this.textoExibido = this.textoExpandido ? this.texto : this.texto.substring(0, 20);
        })
        .catch(error => {
          console.error('Erro ao carregar texto:', error);
          this.texto = 'Erro ao carregar texto';
          this.textoExibido = this.texto;
        });
    } else {
      this.textoExibido = 'Texto não encontrado';
    }
  }


  alternarTextoExpandido(): void {
    this.textoExpandido = !this.textoExpandido;
    this.carregarTexto();
  }

  resetEstado(): void {
    this.textoExpandido = false;
    this.carregarTexto();
  }

}
