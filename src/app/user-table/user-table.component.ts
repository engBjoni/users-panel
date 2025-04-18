import { Component } from '@angular/core';
import { Users } from '../types/users.interface';
import { UserServiceService } from '../user-service.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-user-table',
  imports: [],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss'
})
export class UserTableComponent {

  users: Users[] = [];
  constructor(readonly service: UserServiceService) {}

  ngOnInit() {
    this.service.getUsers().subscribe((data: Users[]) => {
      this.users = data;
      console.log(this.users);
    });
  }
}
