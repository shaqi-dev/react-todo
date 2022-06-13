import React from 'react';
import { Typography } from 'antd';
import TodoList from './components/TodoList';
import styles from './App.module.scss';

const { Title } = Typography;

const App: React.FC = () => {
  return (
    <div className={styles.root}>  
        <Title level={2}>TODO APP</Title>
        <TodoList/>
    </div>
  );
}

export default App;
