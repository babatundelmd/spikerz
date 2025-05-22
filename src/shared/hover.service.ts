import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HoverService {
  isVisible = signal(false);
  position = signal({ x: 0, y: 0 });
  data = signal<any | null>(null);

  showCard(event: MouseEvent, cardData: any): void {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    this.position.set({
      x: rect.right + 8,
      y: rect.top
    });
    this.data.set(cardData);
    this.isVisible.set(true);
  }

  hideCard(): void {
    this.isVisible.set(false);
  }
}
