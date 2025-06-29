import { Component, inject, OnInit } from '@angular/core';
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
export class HomeComponent implements OnInit {
  // users data
  usersList: User[] = [];
  // injecting users service + initialization
  usersService: UsersService = inject(UsersService);
  // Storing data to filter, will contain values to filter
  filteredUsers: User[] = [];

  // before constructor() 
  async ngOnInit() {
    this.usersList = await this.usersService.getAllUsers();
    this.filteredUsers = this.usersList;
  }

  // function to filter in this case for name
  filterResults(text: string) {
    if (!text) {
      this.filteredUsers = this.usersList;
      return;
    }
    
    // Filtering by all properties
    const searchText = text.toLowerCase();
    this.filteredUsers = this.usersList.filter(user => 
      user?.id.toLowerCase().includes(searchText) ||
      user?.email.toLowerCase().includes(searchText) ||
      user?.name.toLowerCase().includes(searchText) ||
      user?.surname.toLowerCase().includes(searchText)
    );
  }
}