import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Input() menuAberto: boolean = false;
  @Output() fecharMenu = new EventEmitter<void>();

  onLinkClick() {
    this.fecharMenu.emit();
  }
}
