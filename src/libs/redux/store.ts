import { configureStore } from '@reduxjs/toolkit';

// import: slices
import themeSlice from './reducers/themeSlice';
import memoSlice from './reducers/memoSlice';

const store = configureStore({
  reducer: {
    theme: themeSlice,
    memo: memoSlice,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;