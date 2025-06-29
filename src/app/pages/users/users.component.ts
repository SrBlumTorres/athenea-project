import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  template: ` <section class="listing">
    <h2 class="listing-heading">{{ user.id }}</h2>
    <p class="listing-location">
      {{ user.name }}, {{ user.surname }}
    </p>
  </section>`,
  styleUrl: './users.component.css',
})
export class UsersComponent {
  @Input() user!: User;
}
