import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducers from './rootReducers';

const store = configureStore({
  reducer: rootReducers,
  middleware: [...getDefaultMiddleware()],
});

export default store;
