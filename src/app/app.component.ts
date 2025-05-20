import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { AssetRiskComponent } from '../components/asset-risk/asset-risk.component';
import { MainContentComponent } from '../main-content/main-content.component';

@Component({
  selector: 'app-root',
  imports: [SidebarComponent, AssetRiskComponent, MainContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Spikerz';
}
