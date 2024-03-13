import React from 'react';
import Todo from './components/Todo';
import TodoLists from './components/TodoLists';


function App() {
  return (
    <div>
      <h1>Todo App</h1>
      <Todo />
      <TodoLists />   
    </div>
  );
}

export default App;