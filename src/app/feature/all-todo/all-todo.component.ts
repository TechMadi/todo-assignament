import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/shared/todo.model';

@Component({
  selector: 'app-all-todo',
  templateUrl: './all-todo.component.html',
  styleUrls: ['./all-todo.component.scss'],
})
export class AllTodoComponent implements OnInit {
  tasks: ITodo[] = [
    {
      text: 'Testing ',
      status: false,
    },
    {
      text: 'Testing ',
      status: false,
    },
    {
      text: 'Testing ',
      status: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  addTodo($event: any) {
    console.log($event);
  }
}
