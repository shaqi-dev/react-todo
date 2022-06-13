import React from 'react';
import { useAppSelector } from '../../hooks';
import { selectTodos, selectTodosCompleted } from '../../store/todosSlice';
import TodoItem from './TodoItem';
import TodoInput from '../TodoInput';
import { List } from 'antd';

const TodoList: React.FC = () => {
  const todos = useAppSelector(selectTodos);
  const todosCompleted = useAppSelector(selectTodosCompleted);

  return (
    <List 
      header={<TodoInput/>}
      bordered
      dataSource={todos}
      renderItem={(item) => {
        const { id, text, isComplete } = item;
        return <TodoItem id={id} text={text} isComplete={isComplete}/>
      }}
    />
  );
};

export default TodoList;
