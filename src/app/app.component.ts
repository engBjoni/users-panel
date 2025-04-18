import { Component } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';
import { PanelComponent } from './panel/panel.component';

@Component({
  selector: 'app-root',
  imports: [MainPageComponent,PanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'users-panel';
  isPanelOpen = true;

  togglePanel() {
    this.isPanelOpen = !this.isPanelOpen;
  }
}
