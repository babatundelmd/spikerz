import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule],
  templateUrl: './asset-risk.component.html',
  styleUrls: ['./asset-risk.component.scss']
})
export class AssetRiskComponent {
  showDrawer = signal(false);
  selectedAsset = signal<Asset | null>(null);
  
  flowAssets = signal<Asset[]>([
    { name: 'Loremipsumm', ip: '' },
    { name: 'Loremipsu', ip: '' },
    { name: 'Loremipsu', ip: '' },
    { name: 'Loremipsumdolorsit', ip: '192.168.1.1', riskLevel: 'Critical' },
    { name: 'Loremipsumdolorsit002', ip: '192.168.1.2', riskLevel: 'Critical' }
  ]);
  
  riskAssets = signal<Asset[]>([
    { name: 'Loremipsumdolorsit', ip: '192.168.1.1', riskLevel: 'Critical' },
    { name: 'Loremipsumdolorsit002', ip: '192.168.1.2', riskLevel: 'Critical' }
  ]);
  
  riskCounts = signal<RiskCount[]>([
    { level: 'Critical', count: 2, color: '#d32f2f' },
    { level: 'High', count: 0, color: '#f57c00' },
    { level: 'Medium', count: 0, color: '#fbc02d' },
    { level: 'Low', count: 0, color: '#4caf50' }
  ]);
  
  totalRiskCount = signal(2);
  currentPage = signal(1);
  totalPages = signal(1);
  
  remediationGroups = signal([
    { label: 'Lorem', color: '#d32f2f' },
    { label: 'Lorem', color: '#f57c00' },
    { label: 'Lorem', color: '#4caf50' }
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
      this.currentPage.update(page => page - 1);
    }
  }
  
  nextPage(): void {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update(page => page + 1);
    }
  }
}