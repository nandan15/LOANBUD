import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isSubSubMenuOpen: { [key: string]: boolean } = {
    bankOffice: false,
    branch: false,
    broker: false,
    loanOfficer: false,
    contacts: false,
    borrowers: false
  };
  isOpen: boolean[] = [];

  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 9; i++) {
      this.isOpen.push(false);
    }
  }

  toggleSubMenu(index: number): void {
   
    this.isOpen[index] = !this.isOpen[index];
    
    
    for (let i = 0; i < this.isOpen.length; i++) {
      if (i !== index) {
        this.isOpen[i] = false;
      }
    }
    

    for (let key in this.isSubSubMenuOpen) {
      if (key !== 'contacts') {
        this.isSubSubMenuOpen[key] = false;
      }
    }
  }

  toggleSubSubMenu(subMenuKey: string): void {
  
    this.isSubSubMenuOpen[subMenuKey] = !this.isSubSubMenuOpen[subMenuKey];
    
    for (let key in this.isSubSubMenuOpen) {
      if (key !== subMenuKey) {
        this.isSubSubMenuOpen[key] = false;
      }
    }
  }
}
