import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const add = (todoProp) => {
    setTodos((todos) => [...todos, todoProp]);
  };
  const deleteTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const allTodos = todos.map((todo) => (
    <Todo key={todo.id} id={todo.id} task={todo.task} />
  ));

  return (
    <div>
      <NewTodoForm />
    </div>
  );
};

export default TodoList;
