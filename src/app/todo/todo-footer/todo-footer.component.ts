import { Component, OnInit } from '@angular/core';
import { filtrosValidos, SetFilterAction } from '../../filter/filter.actions';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { Todo } from '../model/todo.model';
import { LimpiarTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  public pendientes: number;
  filtrosValidos: filtrosValidos [] = ['todos', 'completados', 'pendientes'];
  filtroActual: filtrosValidos;

  ngOnInit() {
    this.store.subscribe((state) => {
      this.filtroActual = state.filtro;
      this.contarPendietes(state.todos);
    });
  }

  cambiarFiltro(nuevoFiltro: filtrosValidos) {
    const accion = new SetFilterAction(nuevoFiltro);
    this.store.dispatch(accion);
  }

  contarPendietes(todos: Todo[]) {
    this.pendientes = todos.filter(todo => !todo.completado).length;
  }

  borrarTodo() {
    const accion = new LimpiarTodoAction();
    this.store.dispatch(accion);
  }

}
