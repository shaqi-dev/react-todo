import React from 'react';
import { useAppDispatch } from '../../hooks';
import { addTodo } from '../../store/todosSlice';
import { Form, Input, Button } from 'antd';
import style from './TodoForm.module.scss';

interface SubmitValues {
  text: string,
}

const formItemStyle = {
  margin: '0',
}

const TodoForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  
  const onSubmitHandler = (values: SubmitValues) => {
    const { text } = values;
    dispatch(addTodo({ text }));
    form.resetFields();
  };

  return (
    <Form 
      form={form}
      name="add-todo"
      className={style.root}
      onFinish={onSubmitHandler}
      autoComplete="off"
    >
      <Form.Item
        name="text"
        style={formItemStyle}
        className={style.input}
        rules={[{ 
          required: true,
          message: 'Please enter your todo task',
        }]}
      >
        <Input 
          placeholder="What needs to be done?"
        />
      </Form.Item>
      <Form.Item 
        style={formItemStyle} 
        className={style.button}
      >
        <Button
          type="primary"
          htmlType="submit"
        >
          Add Todo
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TodoForm;

