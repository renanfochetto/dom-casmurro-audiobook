import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import {NgClass, NgIf} from "@angular/common";
import {MenuComponent} from "./menu/menu.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    MenuComponent,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuAberto: boolean = false;

  alternarMenu() {
    this.menuAberto = !this.menuAberto;
  }

}
