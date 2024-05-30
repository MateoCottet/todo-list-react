import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, { task, timestamp: new Date().getTime(), completed: false }]);
      setTask('');
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const showFastestTask = () => {
    const fastestTask = todos.filter(todo => todo.completed)
                             .sort((a, b) => a.timestamp - b.timestamp)[0];

    if (fastestTask) {
      alert(`La tarea más rápida en realizarse fue: ${fastestTask.task}`);
    } else {
      alert('No hay tareas completadas aún');
    }
  };

  return (
    <div className="container">
      <h1>TODO LIST</h1>
      <div className="card">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Escribe tu tarea aquí"
        />
        <button onClick={addTodo}>Agregar</button>
        <button onClick={showFastestTask}>Mostrar tarea más rápida</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
            />
            <span>{todo.task} - {new Date(todo.timestamp).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
