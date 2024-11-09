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

  carregarTexto():void {
    const capitulo = this.audioService.getCapitulo(this.capituloIndex);
    if(capitulo) {
      this.texto = capitulo.replace(/\n/g, '<br>');
      this.textoExibido = this.texto.substring(0, 100);
    } else {
      this.texto = 'Capítulo não encontrado';
      this.textoExibido = this.texto;
    }
  }

  alternarTextoExpandido(): void {
    this.textoExpandido = !this.textoExpandido;
    if(this.textoExpandido) {
      this.textoExibido = this.texto;
    } else {
      this.textoExibido = this.texto.substring(0, 100);
    }
  }
}
