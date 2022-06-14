import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { selectTodosActive, selectTodosCompleted, removeTodo } from '../../store/todosSlice';
import TodoFilters from '../TodoFilters';
import { Button } from 'antd';
import style from './TodoControsls.module.scss';

const TodoControls: React.FC = () => {
  const dispatch = useAppDispatch();
  const todosActive = useAppSelector(selectTodosActive);
  const todosCompleted = useAppSelector(selectTodosCompleted);
  const itemsLeft = todosActive.length;
  const filters = [
    { label: 'All', value: 'SHOW_ALL' },
    { label: 'Active', value: 'SHOW_ACTIVE' },
    { label: 'Completed', value: 'SHOW_COMPLETED' },
  ];

  const clearCompletedHandler = () => {
    todosCompleted.forEach((todo) => dispatch(removeTodo({ id: todo.id })))
  }

  return (
    <div className={style.root} data-testid="todoControls">
      <span className={style.itemsLeft} data-testid="todoCount">
        {itemsLeft}
        {' '}
        items left
      </span>
      <TodoFilters filters={filters} />
      <Button 
        type="link" 
        onClick={clearCompletedHandler}
        data-testid="todoClear"
      >
        Clear completed
      </Button>
    </div>
  );
};

export default TodoControls;
