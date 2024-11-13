import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

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
export class MenuComponent implements AfterViewInit {
  @ViewChild('primeiroLink', { static: false }) primeiroLink!: ElementRef<HTMLAnchorElement>;
  @Input() menuAberto: boolean = false;
  @Output() fecharMenu = new EventEmitter<void>();

  ngAfterViewInit() {
    if (this.menuAberto) {
      this.primeiroLink.nativeElement.focus();
    }
  }

  onLinkClick() {
    this.fecharMenu.emit();
  }
}
