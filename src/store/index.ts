import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import todos from './todosSlice';
import todosFilter from './todosFilterSlice';

const store = configureStore({
  reducer: {
    todos,
    todosFilter,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
