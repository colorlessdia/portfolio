import { createSlice } from '@reduxjs/toolkit';

// import: types
import type { PayloadAction } from '@reduxjs/toolkit';
import type { MemoType, SortType } from '../../../types';


// type: initialState
interface MemoInitialState {
  memoList: MemoType[];
}

const initialState: MemoInitialState = {
  memoList: [
    {
      id: '1',
      content: '[1] 테스트 편의를 위해 임의로 추가한 기본 메모 목록입니다(새로 고침시 재생성)',
      isUpdated: false,
      dateList: {
        'YYYY': '2024',
        'MM': '06',
        'DD': '09',
        'hh': '12',
        'mm': '00',
        'ss': '00',
        'ms': (new Date('2024-06-09 12:00:00').getTime()).toString()
      }
    },
    {
      id: '2',
      content: '[2] 등록된 메모는 정렬, 수정, 삭제 기능을 이용할 수 있습니다',
      isUpdated: false,
      dateList: {
        'YYYY': '2024',
        'MM': '06',
        'DD': '09',
        'hh': '11',
        'mm': '50',
        'ss': '00',
        'ms': (new Date('2024-06-09 11:50:00').getTime()).toString()
      }
    },
    {
      id: '3',
      content: '[3] 수정시 "메모가 변경되면", 해당 시점으로 작성일이 변경되고, 아래처럼 수정여부를 표시합니다',
      isUpdated: true,
      dateList: {
        'YYYY': '2024',
        'MM': '06',
        'DD': '09',
        'hh': '10',
        'mm': '10',
        'ss': '10',
        'ms': (new Date('2024-06-09 10:10:10').getTime()).toString()
      }
    },
    {
      id: '4',
      content: '[4] 직접 테스트시, 전체 메모 삭제 후 이용하시면 됩니다',
      isUpdated: false,
      dateList: {
        'YYYY': '2024',
        'MM': '06',
        'DD': '09',
        'hh': '08',
        'mm': '30',
        'ss': '00',
        'ms': (new Date('2024-06-09 08:30:00').getTime()).toString()
      }
    },
  ]
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