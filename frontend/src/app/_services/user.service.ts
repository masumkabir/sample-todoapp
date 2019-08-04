import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment';
import {User} from '../_models';
import {Todo} from '../_models/todo';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  getById(id: number) {
    return this.http.get(`${environment.apiUrl}/users/` + id);
  }

  add(user: Todo) {
    return this.http.post(`${environment.apiUrl}/signup`, user);
  }

  update(user: Todo, id: string) {
    return this.http.put(`${environment.apiUrl}/users/` + id, user);
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/users/` + id);
  }
}
