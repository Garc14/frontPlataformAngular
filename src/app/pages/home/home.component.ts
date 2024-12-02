import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  
  isMobile = true;
  isCollapsed = true;
  isDropdownOpen = false;
  showPopup = false;
  inicioPopup = false;
  nubePopup = false;
  shieldPopup = false;



  constructor(private observer: BreakpointObserver) {}

  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      this.isMobile = screenSize.matches;
    });

    if (typeof document !== 'undefined') {
      const container: HTMLElement | null = document.getElementsByClassName("mat-drawer-inner-container")[0] as HTMLElement;
      
      if (container != null) {
        container.style.display = "flex";
        container.style.flexDirection = "column";
      }
    }
  }

  toggleMenu() {
    if (this.isMobile) {
      this.sidenav.toggle();
      this.isCollapsed = false; 
    } else {
      this.sidenav.open(); 
      this.isCollapsed = !this.isCollapsed; 
    }
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen; 
  }
}

export class MenuOverviewExample {}

