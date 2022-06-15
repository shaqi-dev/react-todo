import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index';

export interface TodoState {
  id: string,
  text: string, 
  isComplete: boolean,
}

interface addTodoAction {
  text: string,
}

interface removeTodoAction {
  id: string,
}

interface setIsDoneAction {
  id: string, 
  isComplete: boolean,
}
  
const initialState: TodoState[] = [
  {
    id: '0',
    text: 'Make a Todo app',
    isComplete: true,
  },
  {
    id: '1',
    text: 'Have some coffee.',
    isComplete: false,
  },
  {
    id: '2',
    text: 'Relax with friends',
    isComplete: false,
  }
]

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<addTodoAction>) => {
      const { text } = action.payload;
      const id = (state.length > 0 ? state[state.length - 1].id + 1 : 1).toString();

      state.push({ id, text, isComplete: false });
      return state;
    },
    removeTodo: (state, action: PayloadAction<removeTodoAction>) => {
      const { id } = action.payload;
      const currentTodo = state.find((todo) => todo.id === id);

      if (currentTodo != undefined) {
        return state.filter((todo) => todo.id !== id);
      }
    },
    setIsComplete: (state, action: PayloadAction<setIsDoneAction>) => {
      const { id, isComplete } = action.payload;
      const currentTodo = state.find((todo) => todo.id === id);
      
      if (currentTodo != undefined) {
        currentTodo.isComplete = isComplete;
        return state;
      }
    },
  },
})

export const { addTodo, removeTodo, setIsComplete } = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos;
export const selectTodosActive = (state: RootState) => state.todos.filter((todo) => todo.isComplete !== true);
export const selectTodosCompleted = (state: RootState) => state.todos.filter((todo) => todo.isComplete === true);

export default todosSlice.reducer;
