import { Component } from '@angular/core';
import { BackToTopComponent } from "../back-to-top/back-to-top.component";

@Component({
  selector: 'app-autor',
  standalone: true,
  imports: [
    BackToTopComponent
  ],
  templateUrl: './autor.component.html',
  styleUrl: './autor.component.css'
})
export class AutorComponent {

}
