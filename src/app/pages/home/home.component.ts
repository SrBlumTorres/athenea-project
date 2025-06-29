import { Component } from '@angular/core';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UsersComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-users></app-users>
    </section>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {}
