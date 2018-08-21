import { Component, OnInit } from '@angular/core';
import { Store } from '../../../../node_modules/@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtro: string;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.subscribe((state) => {
      this.todos = state.todos;
      this.filtro = state.filtro;
    });
  }

}
