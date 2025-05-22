import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverService } from '../../shared/hover.service';
import { HoverCardComponent } from '../hover-card/hover-card.component';

interface Asset {
  name: string;
  ip: string;
  riskLevel?: 'Critical' | 'High' | 'Medium' | 'Low';
}

interface RiskCount {
  level: 'Critical' | 'High' | 'Medium' | 'Low';
  count: number;
  color: string;
}

@Component({
  selector: 'app-asset-risk',
  standalone: true,
  imports: [CommonModule, HoverCardComponent],
  templateUrl: './asset-risk.component.html',
  styleUrls: ['./asset-risk.component.scss'],
})
export class AssetRiskComponent {
  showDrawer = signal(false);
  selectedAsset = signal<Asset | null>(null);
  public hoverService = inject(HoverService);

  flowAssets = signal<Asset[]>([
    { name: 'Loremipsumm', ip: '' },
    { name: 'Loremipsu', ip: '' },
    { name: 'Loremipsu', ip: '' },
    { name: 'Loremipsumdolorsit', ip: '192.168.1.1', riskLevel: 'Critical' },
    { name: 'Loremipsumdolorsit002', ip: '192.168.1.2', riskLevel: 'Critical' },
  ]);

  riskAssets = signal<Asset[]>([
    { name: 'Loremipsumdolorsit', ip: '192.168.1.1', riskLevel: 'Critical' },
    { name: 'Loremipsumdolorsit002', ip: '192.168.1.2', riskLevel: 'Critical' },
  ]);

  riskCounts = signal<RiskCount[]>([
    { level: 'Critical', count: 2, color: '#d32f2f' },
    { level: 'High', count: 0, color: '#f57c00' },
    { level: 'Medium', count: 0, color: '#fbc02d' },
    { level: 'Low', count: 0, color: '#4caf50' },
  ]);

  totalRiskCount = signal(2);
  currentPage = signal(1);
  totalPages = signal(1);

  remediationGroups = signal([
    { label: 'Lorem', color: '#d32f2f' },
    { label: 'Lorem', color: '#f57c00' },
    { label: 'Lorem', color: '#4caf50' },
  ]);

  openDrawer(asset: Asset): void {
    this.selectedAsset.set(asset);
    this.showDrawer.set(true);
  }

  closeDrawer(): void {
    this.showDrawer.set(false);
  }

  prevPage(): void {
    if (this.currentPage() > 1) {
      this.currentPage.update((page) => page - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update((page) => page + 1);
    }
  }

  showCard1(event: MouseEvent): void {
    this.updatePosition(event);
    this.hoverService.showCard(event, {
      assetName: 'Lorem Ipsum Dolor Sit',
      ipAddress: '192.168.1.1',
      hasRisk: true,
      loremItems: ['Lorem', '"Ipsum"'],
      additionalSections: [
        {
          title: 'Loremipsum',
          items: ['Lorem', '1234,5678'],
        },
      ],
    });
  }

  showCard2(event: MouseEvent): void {
    this.updatePosition(event);
    this.hoverService.showCard(event, {
      assetName: 'Loremipsu',
      loremItems: ['Lorem:', 'Loremipsum Loremipsum', '1.2.3.4'],
      additionalSections: [
        {
          title: 'Loremipsum',
          items: ['1.2.3.4', '1.2.3.4', '1.2.3.4'],
        },
      ],
    });
  }

  showCard3(event: MouseEvent): void {
    this.updatePosition(event);
    this.hoverService.showCard(event, {
      assetName: 'Loremipsumdolorsit002',
      ipAddress: '192.168.1.2',
      hasRisk: true,
      loremItems: ['Lorem', '"Ipsum"'],
      additionalSections: [
        {
          title: 'Loremipsum',
          items: ['Lorem', '1234,5678'],
        },
      ],
    });
  }

  showCard4(event: MouseEvent): void {
    this.updatePosition(event);
    this.hoverService.showCard(event, {
      assetName: 'Loremipsum',
      loremItems: ['Lorem:', '"Ipsum"', 'Lorem', 'Loremipsum Loremipsum'],
      additionalSections: [
        {
          title: 'Lorem',
          items: [
            '1.2.3.4',
            'Loremipsum',
            '1.2.3.4',
            '1.2.3.4',
            'Lorem',
            '1234,5678',
          ],
        },
        {
          title: 'Lorem',
          items: ['"Ipsum"', 'Loremipsum Loremipsum'],
        },
      ],
    });
  }

private updatePosition(event: MouseEvent): void {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    document.documentElement.style.setProperty('--hover-x', `${rect.left}px`);
    document.documentElement.style.setProperty('--hover-y', `${rect.bottom + 8}px`);
  }

  hideCard(): void {
    this.hoverService.hideCard();
  }
}
