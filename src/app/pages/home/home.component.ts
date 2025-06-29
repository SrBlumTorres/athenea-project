import { Component, inject } from '@angular/core';
import { UsersComponent } from '../users/users.component';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, UsersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // users data
  usersList: User[] = [];
  // injecting users service + initialization
  usersService: UsersService = inject(UsersService);

  constructor() {
    this.usersList = this.usersService.getAllUsers();
  }
}
