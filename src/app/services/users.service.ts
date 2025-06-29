import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/users';
  
  async getAllUsers(): Promise<User[]> {
    try {
      const users = await firstValueFrom(this.http.get<User[]>(this.url)) ?? [];
      localStorage.setItem('users', JSON.stringify(users));
      return users;
    } catch {
      const saved = localStorage.getItem('users');
      return saved ? JSON.parse(saved) : [];
    }
  }

  async getUserById(id: string): Promise<User | undefined> {
    try {
      const user = await firstValueFrom(this.http.get<User>(`${this.url}/${id}`));
      return user;
    } catch {
      const saved = localStorage.getItem('users');
      if (saved) {
        const users: User[] = JSON.parse(saved);
        return users.find(user => user.id === id);
      }
      return undefined;
    }
  }

  async createUser(user: User): Promise<User> {
    // Crear usuario solo en localStorage
    const saved = localStorage.getItem('users');
    const users: User[] = saved ? JSON.parse(saved) : [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    return user;
  }

}