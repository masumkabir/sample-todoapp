import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';

import {User} from '../_models';
import {TodoService} from '../_services';
import {Todo} from '../_models/todo';
import {UpdateTodoService} from '../_services/update.todo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  todos: Todo[] = [];

  constructor(private router: Router, private todoService: TodoService, private updateTodoService: UpdateTodoService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllTodos();
  }

  deleteTodo(id: number) {
    if (!confirm('Are you sure want ot delete?')) {
      return;
    }
    this.todoService.delete(id).pipe(first()).subscribe(() => {
      this.loadAllTodos();
    });
  }

  addTodo(id: number) {
    this.todoService.delete(id).pipe(first()).subscribe(() => {
      this.loadAllTodos();
    });
  }

  updateTodo(todo: Todo) {
    this.updateTodoService.updateTodoAsObservable(todo);
    this.router.navigateByUrl('/add-todo');
  }

  private loadAllTodos() {
    const myThis = this;
    this.todoService.getAll().pipe(first()).subscribe(todos => {
      myThis.todos = todos;
    });
  }
}
