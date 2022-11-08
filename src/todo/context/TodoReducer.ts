import { Todo, TodoState } from '../interface/interfaces';

type TodoAction =
    | { type: 'addTodo', payload: Todo }
    | { type: 'toggleTodo', payload: { id: string } };

export const todoReducer = ( state: TodoState, action: TodoAction ): TodoState => {



    switch ( action.type ) {
        case 'addTodo':
            return {
                ...state,
                todos: [ ...state.todos, action.payload ]
            };
            
            break;
    
        default:
            return state;
    }

};