import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] agregar todo';
export const TOGGLE_TODO = '[TODO] Agregar todo';
export const EDITAR_TODO = '[TODO] Editar todo';
export const ELIMINAR_TODO = '[TODO] Eliminar todo';
export const TOGGLE_ALL_TODO = '[TODO] Marcar todo';
export const CLEAR_TODO = '[TODO] Limpiar todo';

export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;
    constructor(public texto: string) { }
}

export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;
    constructor(public id: number) { }
}

export class EditTodoAction implements Action {
    readonly type = EDITAR_TODO;
    constructor(public id: number, public texto: string) {}
}

export class EliminarTodoAction implements Action {
    readonly type = ELIMINAR_TODO;
    constructor(public id: number) {}
}

export class ToggleAllAction implements Action {
    readonly type = TOGGLE_ALL_TODO;
    constructor(public completado: boolean) {}
}

export class LimpiarTodoAction implements Action {
    readonly type = CLEAR_TODO;
}

export type Acciones = AgregarTodoAction | ToggleTodoAction | EditTodoAction | EliminarTodoAction | ToggleAllAction | LimpiarTodoAction;