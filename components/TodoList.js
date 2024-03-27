import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../store/todosSlice";

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [todoInput, setTodoInput] = useState("");

  function handleAddTodo() {
    if (todoInput.trim() !== "") {
      dispatch(addTodo({ id: Date.now(), text: todoInput, completed: false }));
      setTodoInput("");
    }
  }

  function handleToggleTodo(id) {
    dispatch(toggleTodo(id));
  }

  function handleDeleteTodo(id) {
    dispatch(deleteTodo(id));
  }

  return (
    <div className="max-w-md mx-auto mt-8">
      <input
        type="text"
        className="w-full border rounded px-4 py-2 mb-4"
        placeholder="Enter a new todo"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              className="mr-2"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <span
              className={`flex-1 ${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.text}
            </span>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
