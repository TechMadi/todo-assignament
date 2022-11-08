export interface ITodo {
  newTodo: string;
  status: boolean;
  id: number;
}

export const allTodos: ITodo[] = [
  {
    id: Math.random(),
    newTodo: 'Testing ',
    status: false,
  },
  {
    id: Math.random(),
    newTodo: 'Testing ',
    status: false,
  },
  {
    id: Math.random(),
    newTodo: 'Testing ',
    status: false,
  },
];
