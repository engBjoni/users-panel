import { Component, OnInit } from '@angular/core';
import { UserTableComponent } from '../user-table/user-table.component';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-main-page',
  imports: [UserTableComponent,UserFormComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent  {
  showTable = false;
  
  constructor(public service: UserServiceService) {}
  
}
