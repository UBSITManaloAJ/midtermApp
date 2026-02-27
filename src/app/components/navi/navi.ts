import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navi',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navi.html',
  styleUrl: './navi.css'
})
export class Navi {
  openMenu: string | null = null;

  toggle(menu: string) {
    this.openMenu = this.openMenu === menu ? null : menu;
  }

  close() {
    this.openMenu = null;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.nav-dropdown')) {
      this.openMenu = null;
    }
  }
}