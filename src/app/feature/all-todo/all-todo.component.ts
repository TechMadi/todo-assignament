import { Component, OnInit } from '@angular/core';
import { allTodos, ITodo } from 'src/app/shared/todo.model';
import { TodoService } from 'src/app/shared/todo.service';

@Component({
  selector: 'app-all-todo',
  templateUrl: './all-todo.component.html',
  styleUrls: ['./all-todo.component.scss'],
})
export class AllTodoComponent implements OnInit {
  erroMesage!: string;
  tasks: ITodo[] = [];
  totalTasks: number = 0;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getAllTodos();
  }

  getAllTodos() {
    this.todoService.getAllTodos().subscribe({
      next: (res) => {
        this.tasks = res;
        this.totalTasks = this.tasks.filter((x) => x.status === false).length;
      },
    });
  }
  addTodo(todoData: ITodo) {
    this.todoService.addTodos(todoData).subscribe({
      next: (res) => {
        console.log(res);
        this.getAllTodos();
      },
      error: (err) => {
        console.log(err);
      },
    });
    // this.tasks.find((x) => x.newTodo !== todoData.newTodo)
    //   ? (this.erroMesage = 'Duplicate Tasks Detected')
    //   : (this.tasks = [...this.tasks, todoData]);
  }
}
