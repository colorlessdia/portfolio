import { createSlice } from '@reduxjs/toolkit';

// import: types
import type { PayloadAction } from '@reduxjs/toolkit';
import { MemoType } from '../../../types';


// type: initialState
interface MemoInitialState {
  memoList: MemoType[];
}

const initialState: MemoInitialState = {
  memoList: []
};

const memoSlice = createSlice({
  name: 'memo',
  initialState,
  reducers: {
    createMemo: (state, action: PayloadAction<MemoType>) => {
      state.memoList = [action.payload, ...state.memoList];
    },
    deleteMemo: (state, action: PayloadAction<string>) => {
      const filteredMemo = state.memoList.filter(memo => memo.id !== action.payload);
      
      state.memoList = filteredMemo;
    },
  }
});

export const memoActions = memoSlice.actions;
export default memoSlice.reducer;