import React from 'react';
import { useAppDispatch } from '../../../hooks';
import { TodoState, setIsComplete, removeTodo } from '../../../store/todosSlice';
import { List, Checkbox } from 'antd';
import { DeleteFilled } from '@ant-design/icons';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import style from './TodoItem.module.scss';


const TodoItem: React.FC<TodoState> = ({ id, text, isComplete }) => {
  const dispatch = useAppDispatch();

  const chekboxStyle = isComplete ? style.completed : '';

  const onChangeHandler = (e: CheckboxChangeEvent) => {
    dispatch(setIsComplete({ 
      id, isComplete: e.target.checked 
    }));
  };

  const onDeleteHandler = () => {
    dispatch(removeTodo({ id }));
  };

  return (
    <List.Item id={id} className={style.root} >
      <Checkbox className={`${chekboxStyle} ${style.checkbox}`} onChange={onChangeHandler} checked={isComplete}>
        {text}
      </Checkbox>
      <DeleteFilled onClick={onDeleteHandler} className={style.deleteIcon}/>
    </List.Item>
  );
}

export default TodoItem;
