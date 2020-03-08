import React from 'react';
import InputTodo from './Components/InputTodo';
import TodoList from './Components/TodoList';
import State from './Components/State';

function App() {
  return (
    <div>
      <InputTodo />
      <State />
      <TodoList />
    </div>
  );
}



export default App;
