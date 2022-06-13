import React from 'react';
import { useAppDispatch } from '../../../hooks';
import { setTodosFilter } from '../../../store/todosFilterSlice';
import { Button } from 'antd';

interface TodoControlsProps {
  filters: {filter: string, name: string}[],
}

const TodoFilters: React.FC<TodoControlsProps> = ({ filters }) => {
  const dispatch = useAppDispatch();
  const clickHandler = (filter: string) => {
    dispatch(setTodosFilter({ filter }))
  }
  return (
    <div>
      {
        filters.map((item, i) => (
          <Button 
            key={`todo-filter-${i}`} 
            type="ghost" 
            onClick={() => clickHandler(item.filter)}
          >
            {item.name}
          </Button>
        ))
      }
    </div>
  );
};

export default TodoFilters;