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
  // Storing data to filter, will contain values to filter
  filteredUsers: User[] = [];

  constructor() {
    this.usersList = this.usersService.getAllUsers();
    this.filteredUsers = this.usersList;
  }

  // function to filter in this case for name
  filterResults(text: string) {
    if (!text) {
      this.filteredUsers = this.usersList;
      return;
    }
  
    this.filteredUsers = this.usersList.filter(
      (user) => user?.name.toLowerCase().includes(text.toLowerCase())
    );
  }
}
