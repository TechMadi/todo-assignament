import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './feature/add-todo/add-todo.component';
import { AllTodoComponent } from './feature/all-todo/all-todo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full',
  },
  {
    path: 'all',
    component: AllTodoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
