import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import todos from '../store/todosSlice';
import todosFilter from '../store/todosFilterSlice';

const render = (
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { todos, todosFilter }, preloadedState }),
    ...renderOptions
  } = {}
) => {
  // eslint-disable-next-line react/prop-types
  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'

export { render }