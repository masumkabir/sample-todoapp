import {LoginComponent} from './login/login.component';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {routing} from './app.routing';

import {AlertComponent} from './_directives';
import {AuthGuard} from './_guards';
import {AlertService, AuthenticationService, TodoService} from './_services';
import {NgModule} from '@angular/core';
import {RegistrationComponent} from './registration/registration.component';
import {HomeComponent} from './home/home.component';
import {JwtInterceptor} from './_helpers';
import {UserService} from './_services/user.service';
import { TodoComponent } from './todo/todo.component';
import {UpdateTodoService} from './_services/update.todo.service';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    RegistrationComponent,
    TodoComponent
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    TodoService,
    UpdateTodoService,
    UserService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
