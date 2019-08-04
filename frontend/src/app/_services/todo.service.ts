import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {environment} from '../../environments/environment';
import {User} from '../_models';
import {Todo} from '../_models/todo';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Todo[]>(`${environment.apiUrl}/todos`);
  }

  getById(id: number) {
    return this.http.get(`${environment.apiUrl}/todos/` + id);
  }

  add(todo: Todo) {
    return this.http.post(`${environment.apiUrl}/todos`, todo);
  }

  update(todo: Todo) {
    return this.http.put(`${environment.apiUrl}/todos`, todo);
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/todos/` + id);
  }
}
