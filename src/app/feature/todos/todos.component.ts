import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from 'src/app/shared/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  @Input() todo!: ITodo;
  constructor() {}

  ngOnInit(): void {}
}
