import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from 'src/app/shared/todo.model';
import { TodoService } from 'src/app/shared/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  @Input() todo!: ITodo;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  markTodo(todoId: any) {
    console.log(todoId);
    this.todoService.markTodo(todoId).subscribe({
      next: (res) => {
        console.log(res);
      },
      complete: () => {},
      error: () => {},
    });
  }

  unmarkTodo(todoId: any) {
    console.log(todoId);
    this.todoService.unmarkTodo(todoId).subscribe({
      next: (res) => {
        console.log(res);
      },
      complete: () => {},
      error: () => {},
    });
  }
}
