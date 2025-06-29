import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: ` <section class="listing">
    <h2 class="listing-heading">{{ user.id }}</h2>
    <p class="listing-location">{{ user.name }}, {{ user.surname }}</p>
    <a [routerLink]="['/profile', user.id]">Learn More</a>
  </section>`,
  styleUrl: './users.component.css',
})
export class UsersComponent {
  @Input() user!: User;
}
