import React, { useRef, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { addTodo } from '../../store/todosSlice';
import { Input, Button, Alert } from 'antd';
import style from './TodoInput.module.scss';

const styleInputGroup = {
  height: '40px',
  display: 'flex',
};

const styleInputButton = {
  height: '40px',
};

const TodoInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const inputEl = useRef<any>(null);
  const [error, setError] = useState({
    status: false,
    message: '',
  })

  const onClickHandler = () => {
    const text = inputEl.current.input.value;
    if (text.length > 0) {
      setError({
        status: false,
        message: '',
      })
      dispatch(addTodo({ text }))
    } else {
      setError({
        status: true,
        message: 'Please enter a task in the input field'
      })
    }
  }

  return (
    <div className={style.root}>
      <Input.Group style={styleInputGroup} compact>
        <Input ref={inputEl} placeholder="What needs to be done?" />
        <Button 
          type="primary" 
          style={styleInputButton} 
          onClick={onClickHandler}
        >
          Add Todo
        </Button>
      </Input.Group>
      {
        error.status && <Alert message={error.message} type="error" />
      }
    </div>
  );
};

export default TodoInput;

