import {Component, OnDestroy, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService, AuthenticationService, TodoService} from '../_services';
import {Todo} from '../_models/todo';
import {Subscription} from 'rxjs/Subscription';
import {UpdateTodoService} from '../_services/update.todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {
  createTodoForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  private subscription: Subscription;
  public updatingTodo: Todo;
  public isUpdating: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private todoService: TodoService,
    private updateTodoService: UpdateTodoService,
    private alertService: AlertService) {
    this.isUpdating = false;
  }

  ngOnInit() {
    const myThis = this;

    // get return url from route parameters or default to '/todos'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/todos';

    this.subscription = this.updateTodoService.getTodo().subscribe(todo => {
      if (todo && todo.id !== undefined) {
        myThis.updatingTodo = todo;
      }
    });
    if (myThis.updatingTodo !== null && myThis.updatingTodo !== undefined) {
      this.isUpdating = true;
      this.createTodoForm = this.formBuilder.group({
        id: [myThis.updatingTodo.id, Validators.required],
        title: [myThis.updatingTodo.title, Validators.required],
        description: [myThis.updatingTodo.description, Validators.required],
        event_time: [myThis.updatingTodo.event_time, Validators.required]
      });
    } else {
      this.isUpdating = false;
      this.createTodoForm = this.formBuilder.group({
        title: ['', Validators.required],
        description: ['', Validators.required],
        event_time: ['', Validators.required]
      });
    }
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.createTodoForm.controls;
  }

  onAdd() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.createTodoForm.invalid) {
      this.alertService.error('Please fill up all required fields');
      return;
    }

    this.loading = true;
    const todo = new Todo(this.f.title.value, this.f.description.value, this.f.event_time.value);
    this.todoService.add(todo)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error.message);
          this.loading = false;
        });
  }

  onUpdate() {
    this.submitted = true;
    if (this.createTodoForm.invalid) {
      this.alertService.error('Please fill up all required fields');
      return;
    }
    this.loading = true;
    const todo = new Todo(this.f.title.value, this.f.description.value, this.f.event_time.value, this.f.id.value);
    this.todoService.update(todo)
      .pipe(first())
      .subscribe(
        data => {
          this.updateTodoService.updateTodoAsObservable(undefined);
          this.isUpdating = false;
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.alertService.error(error.message);
          this.loading = false;
        });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.isUpdating = false;
  }
}
