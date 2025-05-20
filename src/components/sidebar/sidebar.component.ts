import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavigationItem {
  icon: string; // SVG path or ID
  label: string;
  active: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  isMobile = signal(window.innerWidth < 768);
  isCollapsed = signal(false);

  navigationItems = signal<NavigationItem[]>([
    {
      icon: 'M8.83333 0.5V5.5H15.5V0.5M8.83333 15.5H15.5V7.16667H8.83333M0.5 15.5H7.16667V10.5H0.5M0.5 8.83333H7.16667V0.5H0.5V8.83333Z',
      label: 'Lorem',
      active: true,
    },
    {
      icon: 'M17.0861 12.6816L10.5787 1.42086C9.87707 0.193047 8.12305 0.193047 7.40391 1.42086L0.914046 12.6816C0.21244 13.8919 1.08945 15.4179 2.49266 15.4179H15.4899C16.9107 15.4179 17.7877 13.8919 17.0861 12.6816ZM9.00006 4.22729C9.56135 4.22729 9.99985 4.68333 9.99985 5.22707V5.29724L9.66659 10.3137C9.64905 10.6645 9.35087 10.9452 9.00006 10.9452C8.64926 10.9452 8.35108 10.6645 8.33354 10.3137L8.00027 5.29724C7.96519 4.71841 8.42124 4.22729 9.00006 4.22729ZM9.00006 13.5937C8.42124 13.5937 7.94765 13.1201 7.94765 12.5413C7.94765 11.9625 8.42124 11.4889 9.00006 11.4889C9.57889 11.4889 10.0525 11.9625 10.0525 12.5413C10.0525 13.1201 9.57889 13.5937 9.00006 13.5937Z',
      label: 'Lorem',
      active: false,
    },
    {
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z',
      label: 'Lorem',
      active: false,
    },
    {
      icon: 'M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5a2.5 2.5 0 0 0-5 0V5H4c-1.1 0-2 .9-2 2v4H.5a2.5 2.5 0 0 0 0 5H2v4c0 1.1.9 2 2 2h4v1.5a2.5 2.5 0 0 0 5 0V17h4c1.1 0 2-.9 2-2v-4h1.5a2.5 2.5 0 0 0 0-5z',
      label: 'Lorem',
      active: false,
    },
    {
      icon: 'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z',
      label: 'Lorem',
      active: false,
    },
    {
      icon: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z',
      label: 'Lorem',
      active: false,
    },
    {
      icon: 'M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z',
      label: 'Lorem',
      active: false,
    },
  ]);

  toggleSidebar(): void {
    this.isCollapsed.update((value) => !value);
  }

  setActiveItem(index: number): void {
    const updatedItems = this.navigationItems().map((item, i) => ({
      ...item,
      active: i === index,
    }));
    this.navigationItems.set(updatedItems);
  }

  constructor() {
    window.addEventListener('resize', () => {
      this.isMobile.set(window.innerWidth < 768);
    });
  }
}
