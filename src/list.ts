import { Todo } from './todo';
import { TodoService } from './service';

export class TodoList {
    private _todos: Todo[];
    private todoService: TodoService;
    private todoListElem: HTMLElement = document.getElementById('todo-list');
    
    constructor() {
        this.todoService = new TodoService();
    }

    get todos() {
        return this._todos;
    }

    set todos(todoList: Todo[]) {
        this._todos = todoList;
    }

    getTodos(): void {
        this.todos = this.todoService.getTodos();
        this.updateList();
    }

    updateList(): void {
        console.log(this.todos);
        let html: string = '';

        for(let todo of this.todos) {
            html += `<li>
                <div class="checkbox">
                    <label class='${todo.done?'done':''}'>
                        <input type="checkbox" todo-id=${todo.id} ${todo.done?'checked':''} onclick="updateTodo(this)"> ${todo.description}
                    </label>
                </div>    
            </li>`;
        }

        this.todoListElem.innerHTML = html;
    }
}