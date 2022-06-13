import React from 'react';
import { useAppSelector } from '../../hooks';
import { selectTodos, selectTodosActive, selectTodosCompleted, TodoState } from '../../store/todosSlice';
import { selectTodosFilter } from '../../store/todosFilterSlice';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import TodoFilters from './TodoFilters';
import { List } from 'antd';

export interface Control {
  name: string, 
  value: TodoState[],
}

const TodoList: React.FC = () => {
  const todos = useAppSelector(selectTodos);
  const todosActive = useAppSelector(selectTodosActive);
  const todosCompleted = useAppSelector(selectTodosCompleted);
  const todosFilter = useAppSelector(selectTodosFilter);

  const filters = [
    { filter: 'SHOW_ALL', name: 'All' },
    { filter: 'SHOW_ACTIVE', name: 'Active' },
    { filter: 'SHOW_COMPLETED', name: 'Completed' },
  ]

  const getVisibleTodos = (filter: string) => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_ACTIVE':
        return todosActive;
      case 'SHOW_COMPLETED':
        return todosCompleted;
    }
  }

  const visibleTodos = getVisibleTodos(todosFilter);

  return (
    <List 
      header={<TodoForm />}
      footer={<TodoFilters filters={filters} />}
      bordered
      dataSource={visibleTodos}
      renderItem={(item) => {
        const { id, text, isComplete } = item;
        return <TodoItem id={id} text={text} isComplete={isComplete}/>
      }}
    />
  );
};

export default TodoList;
