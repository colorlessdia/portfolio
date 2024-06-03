import { createSlice } from '@reduxjs/toolkit';

// import: types
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ThemeType } from '../../../types';

// type: initialState
interface ThemeInitialState {
  theme: ThemeType;
}

const initialState: ThemeInitialState = {
  theme: 'light'
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    }
  }
});

export const themeActions = themeSlice.actions;
export default themeSlice.reducer;