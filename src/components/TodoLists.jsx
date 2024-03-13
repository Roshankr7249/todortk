import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo } from '../features/todoSlice';

const TodoLists = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => handleToggleTodo(todo.id)}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoLists;
