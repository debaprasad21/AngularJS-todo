// Converted from app/scripts/todo/controllers/todo.js

import React, { useState } from 'react';
import TodoService from '../services/TodoService';

const TodoCtrl: React.FC = () => {
  const [todos, setTodos] = useState(TodoService().getTodos());
  const [criteria, setCriteria] = useState('all');
  const [newTodoText, setNewTodoText] = useState('');

  const addTodo = () => {
    TodoService().addTodo({
      text: newTodoText,
      completed: false,
    });
    setNewTodoText('');
    setTodos(TodoService().getTodos());
  };

  const deleteTodo = (todo: { text: string; completed: boolean }) => {
    TodoService().deleteTodo(todo);
    setTodos(TodoService().getTodos());
  };

  const clearCompleted = () => {
    TodoService().clearCompleted();
    setTodos(TodoService().getTodos());
  };

  return (
    <div>
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text}
            <button onClick={() => deleteTodo(todo)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default TodoCtrl;
