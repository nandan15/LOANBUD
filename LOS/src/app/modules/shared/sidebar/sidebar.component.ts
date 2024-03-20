// sidebar.component.ts

import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isOpen: boolean[] = []; // Array to track submenu states

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    // Initialize isOpen array with false for each submenu
    for (let i = 0; i < 10; i++) {
      this.isOpen.push(false);
    }
  }

  toggleSubMenu(index: number): void {
    // Toggle the submenu state
    this.isOpen[index] = !this.isOpen[index];
    
    // Close all other submenus
    for (let i = 0; i < this.isOpen.length; i++) {
      if (i !== index) {
        this.isOpen[i] = false;
        this.renderer.removeClass(document.getElementsByClassName('submenu')[i], 'open');
      }
    }
    
    // If submenu is open, add a class to show it, otherwise remove the class
    if (this.isOpen[index]) {
      this.renderer.addClass(document.getElementsByClassName('submenu')[index], 'open');
    } else {
      this.renderer.removeClass(document.getElementsByClassName('submenu')[index], 'open');
    }
  }
}
