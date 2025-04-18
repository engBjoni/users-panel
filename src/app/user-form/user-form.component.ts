import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Users } from '../types/users.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit {
  totalUsers: number = 0;

  constructor(readonly service: UserServiceService) {}
  profileForm = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
  });

  ngOnInit(): void {
    this.service.getUsers().pipe(takeUntilDestroyed()).subscribe((data: Users[]) => {
      this.totalUsers = data.length;
    });
  }
  onSubmit() {
    console.log(this.profileForm.value);
    let formValue: Users = {
      id: this.totalUsers + 1,
      name: this.profileForm.value.name || '',
      username: this.profileForm.value.username || '',
      email: this.profileForm.value.email || '',
      phone: this.profileForm.value.phone || '',    
    }
    this.service.addUser(formValue).pipe(takeUntilDestroyed()).subscribe({
      next: (response) => {
        console.log('User added successfully', response);
        this.profileForm.reset(); 
        this.totalUsers++; 
      },
      error: (error) => {
        console.error('Error adding user', error);
      }
    });  }
}
