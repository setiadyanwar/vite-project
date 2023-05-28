import { useState } from "react";
import { nanoid } from 'nanoid';
import "./App.css";


const DUMMY_TODO = [
  {
    id: nanoid(),
    title: "Belajar React",
    isCompleted: false,
  },
];

function App() {
  const [todos, setTodos] = useState(DUMMY_TODO);
  const [newTodo, setNewTodo] = useState('');

  function addNewTodo() {
    const updatedTodos = [...todos];
    const objTodo = {
      id: nanoid(),
      title: newTodo,
      isCompleted: false
    };

    updatedTodos.push(objTodo);
    setTodos(updatedTodos);
    setNewTodo('');
  }

  return (
    <>
      <div className="container">
        <h2>Todo App</h2>
        <input
          type="text"
          placeholder="Enter your todo"
          value={newTodo}
          onChange={event => setNewTodo(event.target.value)}
        />
        <button onClick={() => addNewTodo()}>Create</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input type='checkbox'/>
            {todo.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
