import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ITodo } from 'src/app/shared/todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  addTodoForm: FormGroup = new FormGroup({
    newTodo: new FormControl('', Validators.required),
  });

  @Output() todoToAdd: EventEmitter<ITodo> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  submit() {
    let todo: ITodo = {
      id: Math.random(),
      status: false,
      ...this.addTodoForm.value,
    };

    this.todoToAdd.emit(todo);
    this.addTodoForm.reset();
  }
}
