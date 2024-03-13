import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice';

const Todo = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todo.trim() !== '') {
      dispatch(addTodo(todo));
      setTodo('');
    }
  };

  return (
    <div>
      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};
export default Todo;