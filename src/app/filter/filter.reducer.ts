import { filtrosValidos, acciones, SET_FILTER } from './filter.actions';
const estadoInicial: filtrosValidos = 'todos';
export function filtroReducer(state = estadoInicial, action: acciones): filtrosValidos {
    switch (action.type) {
        case SET_FILTER:
            return action.filtros;
        default:
            return state;
    }
} 

