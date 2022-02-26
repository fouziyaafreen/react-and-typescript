import Todo from "../Modals/todo";
import React from "react";
import { useState } from "react";

type TodosContextObject = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObject>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});
const TodosContextProvider: React.FC = (props) => {
  const [todo, settodo] = useState<Todo[]>([]);

  const AddTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    settodo((prevtodo) => {
      return prevtodo?.concat(newTodo);
    });
  };

  const removeTodoHandler = (id: string) => {
    settodo((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== id);
    });
  };

  const contextValue: TodosContextObject = {
    items: todo,
    addTodo: AddTodoHandler,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;