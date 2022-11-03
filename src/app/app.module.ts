import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './feature/add-todo/add-todo.component';
import { AllTodoComponent } from './feature/all-todo/all-todo.component';
import { TodosComponent } from './feature/todos/todos.component';

@NgModule({
  declarations: [AppComponent, AddTodoComponent, AllTodoComponent, TodosComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
