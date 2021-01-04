import React, { useState } from "react";
import AddTodoForm from "./Components/AddTodoForm";
import "./style.css";
import TodoList from "./Components/TodoList";

const initialTodos: Array<Todo> = [
  { text: "walking", complete: true },
  { text: "reading", complete: false },
  { text: "bake a cake", complete: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodo = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodo);
  };

  const addTodo: AddTodo = (newTodo) => {
    setTodos([...todos, { text: newTodo, complete: false }]);
  };

  const removeTodo: ToggleTodo = (delTodo) => {
    const removedTodo = todos.filter((todo) => {
      return todo !== delTodo;
    });
    setTodos(removedTodo);
  };

  return (
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;
