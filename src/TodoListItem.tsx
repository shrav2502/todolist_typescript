import * as React from "react";

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
  removeTodo: ToggleTodo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleTodo,
  removeTodo,
}) => {
  return (
    <li>
      <label className={todo.complete ? "complete" : undefined}>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => toggleTodo(todo)}
        />
        {todo.text}
      </label>
      <button onClick={() => removeTodo(todo)}>X</button>
    </li>
  );
};

export default TodoListItem;
