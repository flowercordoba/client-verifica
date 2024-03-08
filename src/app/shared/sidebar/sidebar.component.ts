import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  isSubMenuVisible: boolean = false;

  toggleSubMenu(): void {
    this.isSubMenuVisible = !this.isSubMenuVisible;
  }
}
