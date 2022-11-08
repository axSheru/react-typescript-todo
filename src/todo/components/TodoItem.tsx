import { Todo } from "../interface/interfaces";
// import { useContext } from 'react';
// import { TodoContext } from "../context/TodoContext";
import { useTodos } from "../hooks/useTodos";


interface TodoItemProps {
    todo: Todo
};

export const TodoItem = ( { todo }: TodoItemProps ) => {

    // const { toggleTodo } = useContext( TodoContext );

    /* const handleDbClick = () => {
        toggleTodo( todo.id );
    }; */

    const { toggleTodo } = useTodos();

    return (
        <li
            onDoubleClick={ () => toggleTodo( todo.id ) }
            style={{
                cursor: 'pointer',
                textDecoration: todo.completed ? 'line-through' : ''
            }}
        >
            { todo.desc }
        </li>
    );
};
