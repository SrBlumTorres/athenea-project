import { Component } from '@angular/core';
import { UsersComponent } from '../users/users.component';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';

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
      <app-users [user]="user"></app-users>
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  user: User = {
    id: '26914530E',
    email: 'ablumtorres7@gmail.com',
    name: 'Alfredo',
    surname: 'Blum',
  };
}
