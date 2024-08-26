// Converted from app/scripts/todo/services/todo.js

type Todo = {
  completed: boolean;
  // Add other properties as needed
};

const TodoService = () => {
  let todos: Todo[] = [];

  const addTodo = (todo: Todo) => {
    todos.push(todo);
  };

  const deleteTodo = (todo: Todo) => {
    const index = todos.indexOf(todo);
    if (index > -1) {
      todos.splice(index, 1);
    }
  };

  const clearCompleted = () => {
    todos = todos.filter(todo => !todo.completed);
  };

  return {
    addTodo,
    deleteTodo,
    clearCompleted,
    getTodos: () => todos,
  };
};

export default TodoService;
