import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hover-card',
  imports: [],
  templateUrl: './hover-card.component.html',
  styleUrl: './hover-card.component.scss',
})
export class HoverCardComponent {
  @Input() isVisible: boolean = false;
  @Input() assetName: string = '';
  @Input() ipAddress?: string;
  @Input() hasRisk: boolean = false;
  @Input() loremItems: string[] = [];
  @Input() additionalSections: { title: string; items: string[] }[] = [];

  getTagClass(item: string): string {
    if (item.includes('"') || item.includes('Ipsum')) return 'orange';
    if (item.includes('.') && /\d/.test(item)) return 'blue';
    if (item === 'Lorem') return 'green';
    if (item.includes('1.2.3.4')) return 'purple';
    return 'gray';
  }
}
