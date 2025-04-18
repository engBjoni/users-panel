import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-panel',
  imports: [],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent {

  constructor(readonly service: UserServiceService) {}
  showUserTable() {
    console.log('showUserTable');
    this.service.setTableVisible(true);
  }
  
  addNewUser() {
    console.log('addNewUser');
    this.service.setTableVisible(false);
  }
}
