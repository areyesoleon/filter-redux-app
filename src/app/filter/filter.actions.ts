import { Action } from '@ngrx/store';

export const SET_FILTER = '[FILTER] Set filter';
export type filtrosValidos = 'todos' | 'completados' | 'pendientes';
export class SetFilterAction implements Action {
    readonly type = SET_FILTER;
    constructor(public filtros: filtrosValidos) {}
}

export type acciones = SetFilterAction;