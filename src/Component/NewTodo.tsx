import React, { useRef,useContext } from "react";
import classes from './NewTodo.module.css';
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC=()=>{

    const todoctx = useContext(TodosContext);
    const todoInput=useRef<HTMLInputElement>(null);

    const onSubmitHandler=(event: React.FormEvent)=>{
        event.preventDefault();

        const inputTodo=todoInput.current!.value;
        todoctx.addTodo(inputTodo);
        

    }

    return <form onSubmit={onSubmitHandler} className={classes.form}>
        <label htmlFor="text">Todo text</label>
        <input type='text' id='text' ref={todoInput}/>
        <button>Add Todo</button>
    </form>
};

export default NewTodo;