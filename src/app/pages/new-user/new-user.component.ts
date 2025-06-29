import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css',
})
export class NewUserComponent {
  private usersService = inject(UsersService);
  private router = inject(Router); // Inyectamos el router

  applyForm = new FormGroup({
    id: new FormControl(''),
    email: new FormControl(''),
    name: new FormControl(''),
    surname: new FormControl(''),
  });

  async createUser() {
    const user = this.applyForm.value as User;
    await this.usersService.createUser(user);

    // Alert de confirmación
    alert('usuari creat satisfactòriament! ✅');
    
    // Redirect al home
    this.router.navigate(['/']);
  }
}
