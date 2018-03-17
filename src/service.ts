import { Todo } from "./todo";

export class TodoService {
  todos: Todo[];
  constructor() {
    this.todos = [
      { id: 1, description: "Pay Powerbill", done: false },
      { id: 2, description: "Check credit card bill", done: false },
      { id: 3, description: "Call dad", done: false },
      { id: 4, description: "Call bank callcenter", done: true },
      { id: 5, description: "Go to super market", done: true }
    ];
  }

  getTodos() {
    return this.todos;
  }
}
