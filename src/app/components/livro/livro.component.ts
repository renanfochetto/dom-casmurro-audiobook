import { Component } from '@angular/core';
import { BackToTopComponent } from "../back-to-top/back-to-top.component";

@Component({
  selector: 'app-livro',
  standalone: true,
  imports: [ BackToTopComponent ],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'
})
export class LivroComponent {

}
