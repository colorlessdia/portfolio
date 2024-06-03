import { createSlice } from '@reduxjs/toolkit';

// import: types
import type { PayloadAction } from '@reduxjs/toolkit';
import type { MemoType, SortType } from '../../../types';


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
    deleteAllMemo: (state) => {
      state.memoList = [];
    },
    updateMemo: (state, action: PayloadAction<MemoType>) => {
      const updateMemoList = state.memoList.map(memo => {
        if (memo.id === action.payload.id) {
          return { ...action.payload };
        } else {
          return { ...memo };
        }
      });

      state.memoList = updateMemoList;
    },
    sortMemo: (state, action: PayloadAction<SortType>) => {
      const sortType: SortType = action.payload;

      switch (sortType) {
        case 'latest':
          state.memoList = state.memoList
            .slice()
            .sort((a, b) => parseInt(b.dateList.ms) - parseInt(a.dateList.ms));
          break;
        case 'oldest':
          state.memoList = state.memoList
            .slice()
            .sort((a, b) => parseInt(a.dateList.ms) - parseInt(b.dateList.ms));
          break;
        case 'longest':
          state.memoList = state.memoList
            .slice()
            .sort((a, b) => b.content.length - a.content.length);
          break;
        case 'shortest':
          state.memoList = state.memoList
            .slice()
            .sort((a, b) => a.content.length - b.content.length);
          break;
        default:
          state.memoList = state.memoList
            .slice()
            .sort((a, b) => parseInt(b.dateList.ms) - parseInt(a.dateList.ms));
          break;
      }
    },
  }
});

export const memoActions = memoSlice.actions;
export default memoSlice.reducer;