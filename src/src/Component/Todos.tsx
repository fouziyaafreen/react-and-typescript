import React from 'react';

import TodoItem from './TodoItem';
import { useContext } from 'react';
import { TodosContext } from '../store/todos-context';
import classes from './Todos.module.css';
const  Todos:React.FC=()=> {

    const todoctx = useContext(TodosContext)
    return (<ul className={classes.todos}>
        {todoctx.items.map(item=>(
            <TodoItem key={item.id} text={item.text} deleteitemHandler={todoctx.removeTodo.bind(null,item.id)} />
        ))}
        </ul>);
}
export default Todos;
