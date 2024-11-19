//メモ: npx create-react-app react-sample-appを叩いた
import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);//メモ: []は初期値、
  const [input, setInput] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),//時刻をユニークなidにする(多分ユニーク)
      text: input.trim(),
      completed: false,
    };
    setTodos([newTodo, ...todos]);
    setInput(""); 
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What needs to be done?"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />
            <label
              style={{
                textDecorationLine: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </label>
            <button onClick={() => handleDelete(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
