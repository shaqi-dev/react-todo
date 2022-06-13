import React from 'react';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  return (
    <div>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
    </div>
  );
};

export default TodoList;
