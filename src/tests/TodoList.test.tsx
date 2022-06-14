/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { render, screen, fireEvent } from './test-utils';
import { waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('Test', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      value: () => {
        return {
          matches: false,
          addListener: () => {},
          removeListener: () => {},
        };
      }
    })
  });

  test('It renders the correct Todo List', () => {
    render(<TodoList />);

    const todoForm = screen.getByTestId('todoForm');
    const inputElement = screen.getByTestId('todoInput');
    const todoList = screen.getByTestId('todoList');
    const todos = screen.queryAllByTestId('todoItem');
    const todoControls = screen.getByTestId('todoControls');
    const countElement = screen.getByTestId('todoCount');
    
    expect(todoForm).toBeInTheDocument();
    expect(todoList).toBeInTheDocument();
    expect(todoControls).toBeInTheDocument();
    expect(inputElement.getAttribute('value')).toBe('');
    expect(todos.length).toBe(3);
    expect(countElement).toHaveTextContent('2 items left');
  });

  test('It creates a new Todo', async () => {    
    render(<TodoList />);

    const inputElement = screen.getByTestId('todoInput');
    const submitButton = screen.getByTestId('todoSubmit');
    const countElement = screen.getByTestId('todoCount');
  
    fireEvent.change(inputElement, { target: { value: 'Learn something new about testing' } });
    fireEvent.submit(submitButton);

    await waitFor(() => {
      const todos = screen.queryAllByTestId('todoItem');
      const todoNew = todos[todos.length - 1];

      expect(todos.length).toBe(4);
      expect(todoNew.textContent).toBe('Learn something new about testing');
      expect(countElement).toHaveTextContent('3 items left');
    });
  });

  test('It deletes a Todo', () => {    
    render(<TodoList />);

    const deleteButtons = screen.queryAllByTestId('todoDelete');
    const countElement = screen.getByTestId('todoCount');
    
    fireEvent.click(deleteButtons[1]);

    const todos = screen.queryAllByTestId('todoItem');

    expect(todos.length).toBe(2);
    expect(todos[1].textContent).toBe('Relax with friends');
    expect(countElement).toHaveTextContent('1 items left');
  });

  test('It clears completed Todos', () => {    
    render(<TodoList />);

    const clearButton = screen.getByTestId('todoClear');
    
    fireEvent.click(clearButton);

    const todos = screen.queryAllByTestId('todoItem');

    expect(todos.length).toBe(2);
    expect(todos[0].textContent).toBe('Have some coffee.');
  });

  test('It filters Todos', async () => {    
    render(<TodoList />);

    const filter = screen.getByText('Completed');
  
    fireEvent.click(filter);

    const todos = screen.queryAllByTestId('todoItem');

    expect(todos.length).toBe(1);
    expect(todos[0].textContent).toBe('Make a Todo app');
  });
});
