import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})

export class AppComponent {
  title = 'app works!';

  // Bound instance from <input [(ngModel)]="newTodo">
  newTodo: Todo = new Todo();

  // Ask Angular DependencyInjector (DI) to inject the dependency
  // associated with the dependency injection token `TodoDataService`
  // and assign it to a proper called `todoDataService`
  constructor (private todoDataService: TodoDataService){}

  // Service now available as this.todoDataService
  addTodo(){
  	this.todoDataService.addTodo(this.newTodo);
  	this.newTodo = new Todo();
  }

  toggleTodoComplete(todo){
  	this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo){
  	this.todoDataService.deleteTodoById(todo.id);
  }

  get todos(){
  	return this.todoDataService.getAllTodos();
  }

}

