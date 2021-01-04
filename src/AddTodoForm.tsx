import * as React from "react";
import { useState, ChangeEvent, FormEvent } from "react";

interface AddTodoFormProps {
  addTodo: AddTodo;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodo !== "") {
      addTodo(newTodo);
      setNewTodo("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
