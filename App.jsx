import React, { useState } from 'react';
import './App.css'

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodo = () => {
    if (newTodo !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const completeTodo = (index) => {
    const completedTodo = todos[index];
    setCompletedTodos([...completedTodos, completedTodo]);
    setTodos(todos.filter((_, i) => i !== index));
  };

  const deleteTodo = (index, isCompleted) => {
    if (isCompleted) {
      setCompletedTodos(completedTodos.filter((_, i) => i !== index));
    } else {
      setTodos(todos.filter((_, i) => i !== index));
    }
  };

  return (
    <div className='todo-box'>
      <h2>To-Do List</h2>
      <div className='todo-line'>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button className='add-btn' onClick={addTodo}>Add</button>
      </div>
      <div>
        <h3 className='pnd-line'>Pending Tasks</h3>
        {todos.map((todo, index) => (
          <div key={index}>
            <p>{todo}</p>
            <button onClick={() => completeTodo(index)}>Complete</button>
            <button className='delete-btn' onClick={() => deleteTodo(index, false)}>Delete</button>
          </div>
        ))}
      </div>
      <div>
        <h3 className='cmplt-line'>Completed Tasks</h3>
        {completedTodos.map((todo, index) => (
          <div key={index}>
            <p>{todo}</p>
            <button onClick={() => deleteTodo(index, true)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
