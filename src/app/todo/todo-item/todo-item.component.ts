import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '../../../../node_modules/@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { ToggleTodoAction, EditTodoAction, EliminarTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('txtInputFisico') txtInputFisico: ElementRef;
  chkField: FormControl;
  txtField: FormControl;
  editando: boolean;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completado);
    this.txtField = new FormControl(this.todo.texto, Validators.required);
    this.chkField.valueChanges.subscribe(() => {
      const accion = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(accion);
    });
  }

  editar() {
    this.editando = true;
    setTimeout((params) => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editando = false;
    if (this.txtField.invalid || this.txtField.value === this.todo.texto) {
      return;
    }
    const action = new EditTodoAction(this.todo.id, this.txtField.value);
    this.store.dispatch(action);
  }

  borrarTodo() {
    const action = new EliminarTodoAction(this.todo.id);
    this.store.dispatch(action);
  }

}
