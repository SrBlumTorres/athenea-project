import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  //! First is necessary run json-server --watch db.json
  url = 'http://localhost:3000/users';
  
  async getAllUsers(): Promise<User[]> {
    try {
      const serverUsers = await firstValueFrom(this.http.get<User[]>(this.url)) ?? [];
      
      // Leer usuario de localStorage si existe
      const localUser = localStorage.getItem('newUser');
      if (localUser) {
        const parsedUser = JSON.parse(localUser);
        serverUsers.push(parsedUser);
      }
      
      return serverUsers;
    } catch {
      // Si no hay servidor, solo devolver el de localStorage
      const localUser = localStorage.getItem('newUser');
      return localUser ? [JSON.parse(localUser)] : [];
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
    try {
      // Intentar crear en el servidor
      const newUser = await firstValueFrom(this.http.post<User>(this.url, user));
      return newUser;
    } catch {
      // Si falla el servidor, guardar en localStorage
      localStorage.setItem('newUser', JSON.stringify(user));
      return user;
    }
  }

}