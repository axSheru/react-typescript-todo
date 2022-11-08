import { Todo } from "../interface/interfaces";


interface TodoItemProps {
    todo: Todo
};

export const TodoItem = ( { todo }: TodoItemProps ) => {

    const handleDbClick = () => {
        console.log( todo.desc )
    };

    return (
        <li onDoubleClick={ handleDbClick }>
            { todo.desc }
        </li>
    );
};
