import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setTodosFilter, selectTodosFilter } from '../../store/todosFilterSlice';
import { Radio, RadioChangeEvent } from 'antd';

interface TodoControlsProps {
  filters: {label: string, value: string}[],
}

const TodoFilters: React.FC<TodoControlsProps> = ({ filters }) => {
  const dispatch = useAppDispatch();
  const todosFilter = useAppSelector(selectTodosFilter);
  
  const changeHandler = ({target: { value }}: RadioChangeEvent) => {
    dispatch(setTodosFilter({ filter: value }))
  }

  return (  
    <Radio.Group options={filters} value={todosFilter} onChange={changeHandler} optionType="button" />   
  );
};

export default TodoFilters;