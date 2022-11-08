import { useReducer } from "react";
import { TodoState } from "../interface/interfaces";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./TodoReducer";

const INITIAL_STATE: TodoState = {
    todoCount: 2,
    todos: [
        {
            id: '1',
            desc: 'Hacer un sandwich.',
            completed: false
        },
        {
            id: '2',
            desc: 'Abrir pan.',
            completed: false
        }
    ],
    completed: 0,
    pending: 2
};

interface props {
    children: JSX.Element | JSX.Element[]
};

export const TodoProvider = ({ children }: props) => {

    const [ todoState, dispatch ] = useReducer( todoReducer, INITIAL_STATE);

    const toggleTodo = ( id: string ) => {
        dispatch({ type: 'toggleTodo', payload: { id } });
    };

    return (
        <TodoContext.Provider value={{
            todoState,
            toggleTodo
        }}>
            { children }
        </TodoContext.Provider>
    );
};
