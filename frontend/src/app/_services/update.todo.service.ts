import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../_models/todo';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class UpdateTodoService {
  private updatingTodoSource = new BehaviorSubject(new Todo('', '', ''));
  public updatingTodo = this.updatingTodoSource.asObservable();

  constructor(private http: HttpClient) {
  }

  updateTodoAsObservable(todo: Todo) {
    console.log('updateTodoAsObservable: ' + JSON.stringify(todo));
    this.updatingTodoSource.next(todo);
  }

  getTodo(): Observable<any> {
    return this.updatingTodoSource.asObservable();
  }
}
