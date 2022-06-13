import React from 'react';
import { useAppDispatch } from '../../../hooks';
import { TodoState, setIsComplete, removeTodo } from '../../../store/todosSlice';
import { List, Checkbox } from 'antd';
import { DeleteFilled } from '@ant-design/icons';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import styles from './TodoItem.module.scss';


const TodoItem: React.FC<TodoState> = ({ id, text, isComplete }) => {
  const dispatch = useAppDispatch();

  const chekboxStyle = isComplete ? styles.completed : '';

  const onChangeHandler = (e: CheckboxChangeEvent) => {
    dispatch(setIsComplete({ 
      id, isComplete: e.target.checked 
    }));
  };

  const onDeleteHandler = () => {
    dispatch(removeTodo({ id }));
  };

  return (
    <List.Item id={id} >
      <Checkbox className={chekboxStyle} onChange={onChangeHandler} checked={isComplete}>
        {text}
      </Checkbox>
      <DeleteFilled onClick={onDeleteHandler}/>
    </List.Item>
  );
}

export default TodoItem;
