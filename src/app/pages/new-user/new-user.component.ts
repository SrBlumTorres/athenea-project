import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css',
})
export class NewUserComponent {
  private usersService = inject(UsersService);

  applyForm = new FormGroup({
    id: new FormControl(''),
    email: new FormControl(''),
    name: new FormControl(''),
    surname: new FormControl(''),
  });

  async createUser() {
    const user = this.applyForm.value as User;
    this.usersService.createUser(user);
  }
}
