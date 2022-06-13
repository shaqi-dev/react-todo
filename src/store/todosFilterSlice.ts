import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './index';

interface setTodosFilterAction {
  filter: string,
}

const initialState = 'SHOW_ALL';

export const todosFilterSlice = createSlice({
  name: 'todosFilter',
  initialState,
  reducers: {
    setTodosFilter: (state, action: PayloadAction<setTodosFilterAction>) => {
      const { filter } = action.payload;
      return filter;
    },
  },
})

export const { setTodosFilter } = todosFilterSlice.actions;

export const selectTodosFilter = (state: RootState) => state.todosFilter;

export default todosFilterSlice.reducer;