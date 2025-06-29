import { Component, inject } from '@angular/core';
import { UsersComponent } from '../users/users.component';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, UsersComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-users *ngFor="let user of usersList" [user]="user"> </app-users>
    </section>
  `,
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
