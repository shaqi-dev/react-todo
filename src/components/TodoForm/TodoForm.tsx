import React from 'react';
import { useAppDispatch } from '../../hooks';
import { addTodo } from '../../store/todosSlice';
import { Form, Input, Button } from 'antd';

interface SubmitValues {
  text: string,
}

const formStyle = {
  display: 'flex',
}

const itemStyle = {
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
      style={formStyle}
      onFinish={onSubmitHandler}
      autoComplete="off"
    >
      <Form.Item
        name="text"
        style={itemStyle}
        rules={[{ 
          required: true,
          message: 'Please enter your todo task',
        }]}
      >
        <Input 
          placeholder="What needs to be done?"
        />
      </Form.Item>
      <Form.Item style={itemStyle}>
        <Button type="primary" htmlType="submit">
          Add Todo
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TodoForm;

