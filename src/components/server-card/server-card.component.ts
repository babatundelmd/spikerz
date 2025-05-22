import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-server-card',
  imports: [],
  templateUrl: './server-card.component.html',
  styleUrl: './server-card.component.scss'
})
export class ServerCardComponent {
  @Input() title: string = 'Lorem T';
  @Input() serverName: string = 'Server';
  @Input() serverDescription: string = 'Lorem Ipsum Dolor Sit Amet Consectetur.';
  @Input() expandedContent: string = 'Lorem Ipsum Dolor Sit Amet Consectetur. In Laoreet Elementum Luctus Odio. Id Enim Urna.';

  isExpanded = signal(false);

  toggleExpand(): void {
    this.isExpanded.update(value => !value);
  }
}
