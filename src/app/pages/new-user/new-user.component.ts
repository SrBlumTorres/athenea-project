import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `<form [formGroup]="applyForm" (submit)="createUser()">
    <label for="id">Id</label>
    <input id="id" type="text" formControlName="id" />

    <label for="email">Email</label>
    <input id="email" type="email" formControlName="email" />

    <label for="name">Name</label>
    <input id="name" type="text" formControlName="name" />

    <label for="surname">Surname</label>
    <input id="surname" type="text" formControlName="surname" />

    <button type="submit" class="primary">Create user</button>
  </form>`,
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

  createUser() {
    const user = this.applyForm.value as User;
    this.usersService.createUser(user);
  }
}
