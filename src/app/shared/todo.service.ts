import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { allTodos, ITodo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  tasks: ITodo[] = [];
  constructor() {}

  getAllTodos(): Observable<any> {
    return of(this.tasks);
  }

  addTodos(todoData: ITodo): Observable<ITodo[]> {
    this.tasks.find((x) => x.newTodo === todoData.newTodo)
      ? console.error('Todo already Exists')
      : (this.tasks = [...this.tasks, todoData]);

    return of(this.tasks);
  }
  markTodo(todoId: any): Observable<ITodo[]> {
    console.log(this.tasks);
    this.tasks[this.tasks.findIndex((x) => x.id === todoId)].status = true;

    return of(this.tasks);
  }

  unmarkTodo(todoId: any): Observable<ITodo[]> {
    console.log(todoId);
    this.tasks[this.tasks.findIndex((x) => x.id === todoId)].status = false;
    return of(this.tasks);
  }
}
