import { Component, ElementRef, ViewChild, AfterViewChecked, AfterViewInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { NgClass, NgIf } from "@angular/common";
import { MenuComponent } from "./menu/menu.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    MenuComponent,
    NgIf,
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewChecked, AfterViewInit {
  menuAberto: boolean = false;

  @ViewChild('primeiroLink') primeiroLink!: ElementRef<HTMLAnchorElement>;
  @ViewChild('iconeMenu') iconeMenu!: ElementRef;

  alternarMenu() {
    this.menuAberto = !this.menuAberto;
  }

  ngAfterViewInit() {
    if(this.menuAberto && this.primeiroLink) {
      this.primeiroLink.nativeElement.focus();
    }
  }

  ngAfterViewChecked() {
    if (this.menuAberto && this.primeiroLink) {
        this.primeiroLink?.nativeElement.focus();
    }
  }
}
