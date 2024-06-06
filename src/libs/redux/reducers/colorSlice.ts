import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { ColorType } from "../../../types";

interface ColorInitialState {
  colorList: ColorType[];
}

const initialState: ColorInitialState = {
  colorList: [],
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