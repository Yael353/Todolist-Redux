import React from "react";
import TodoList from "../components/TodoList";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <TodoList />
    </div>
  );
}
