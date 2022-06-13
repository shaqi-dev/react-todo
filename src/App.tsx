import React from 'react';
import { Typography, Input, Button } from 'antd';
import TodoList from './components/TodoList';
import styles from './App.module.scss';

const { Title } = Typography;

const styleInputGroup = {
  display: 'flex'
}

const App: React.FC = () => {
  return (
    <div className={styles.root}>  
        <Title level={2}>TODO APP</Title>
        <Input.Group style={styleInputGroup} compact>
          <Input placeholder="What needs to be done?" />
          <Button type="primary">Add Todo</Button>
        </Input.Group>
        <TodoList/>
    </div>
  );
}

export default App;
