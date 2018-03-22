import { TodoList } from './list';
import { Todo } from './todo';

let listObj: TodoList = new TodoList();
listObj.getTodos();

$(document).ready(function(){
    console.log("Jquery is working now");

    $('.checkbox-input').on('click', function(e){
        $(this).parent('label').toggleClass('done');
    });
});