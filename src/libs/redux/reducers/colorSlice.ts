import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { ColorType } from "../../../types";

interface ColorInitialState {
  colorList: ColorType[];
}

const initialState: ColorInitialState = {
  colorList: [
    { code: '#ffbe98', alias: '#ffbe98' },
    { code: '#e24666', alias: '#e24666' },
    { code: '#f5df4d', alias: '#f5df4d' },
    { code: '#1d4e89', alias: '#1d4e89' },
    { code: '#5f4b8b', alias: '#5f4b8b' },
    { code: '#f7caca', alias: '#f7caca' },
    { code: '#00997b', alias: '#00997b' },
  ],
};

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    addColor: (state, action: PayloadAction<ColorType>) => {
      state.colorList = [action.payload, ...state.colorList];
    },
    removeColor: (state, action: PayloadAction<{code: string}>) => {
      state.colorList = state.colorList.filter(colorItem => (
        colorItem.code !== action.payload.code
      ));
    },
    removeAllColor: (state) => {
      state.colorList = [];
    },
    modifyAlias: (state, action: PayloadAction<{code: string, alias: string}>) => {
      state.colorList = state.colorList.map(colorItem => {
        if (colorItem.code === action.payload.code) {
          return { ...colorItem, alias: action.payload.alias };
        }

        return colorItem;
      });
    },
  }
});

export const colorActions = colorSlice.actions;
export default colorSlice.reducer;