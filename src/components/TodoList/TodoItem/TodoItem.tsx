import React from 'react';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import styles from './TodoItem.module.scss';

const onChangeHandler = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
}

const TodoItem: React.FC = () => {
  return (
    <div className={styles.root}>
      <Checkbox onChange={onChangeHandler}>Todo</Checkbox>
    </div>
  );
}

export default TodoItem;
