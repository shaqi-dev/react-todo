import React from 'react';
import { useAppDispatch } from '../../../hooks';
import { TodoState, setIsComplete } from '../../../store/todosSlice';
import { List, Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import styles from './TodoItem.module.scss';


const TodoItem: React.FC<TodoState> = ({ id, text, isComplete }) => {
  const dispatch = useAppDispatch();

  const itemStyle = isComplete ? styles.completed : '';

  const onChangeHandler = (e: CheckboxChangeEvent) => {
    dispatch(setIsComplete({ 
      id, isComplete: e.target.checked 
    }));
  };

  return (
    <List.Item id={id} className={itemStyle}>
      <Checkbox onChange={onChangeHandler}>
        {text}
      </Checkbox>
    </List.Item>
  );
}

export default TodoItem;
