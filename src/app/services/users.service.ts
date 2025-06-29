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
      return await firstValueFrom(this.http.get<User[]>(this.url)) ?? [];
    } catch {
      return [];
    }
  }

  async getUserById(id: string): Promise<User | undefined> {
    try {
      return await firstValueFrom(this.http.get<User>(`${this.url}/${id}`));
    } catch {
      return undefined;
    }
  }

  async createUser(user: User): Promise<User> {
    try {
      return await firstValueFrom(this.http.post<User>(this.url, user));
    } catch {
      throw new Error('Error creating user');
    }
  }
}
