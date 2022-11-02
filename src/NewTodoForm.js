import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewTodoForm = ({ newTodo }) => {
  const [formData, setFormData] = useState({
    todo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const getInput = (e) => {
    e.preventDefault();
    newTodo({ ...formData, id: uuid() });
    setFormData({ height: "", width: "", backgroundColor: "" });
  };

  return (
    <div>
      <form onSubmit={getInput}>
        <label htmlFor="todo">New Todo: </label>
        <input
          onChange={handleChange}
          id="todo"
          type="text"
          name="todo"
          value={formData.todo}
        />
        <button>Add Task</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
