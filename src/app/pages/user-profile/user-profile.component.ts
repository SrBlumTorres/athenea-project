import { Component, Inject, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent implements OnInit {
  // Function to access to current url data
  route: ActivatedRoute = inject(ActivatedRoute);
  // Injecting service
  usersService = inject(UsersService);
  // Model
  user: User | undefined;

  async ngOnInit() {
    const userId = this.route.snapshot.params['id'];
    this.user = await this.usersService.getUserById(userId);
  }
}
