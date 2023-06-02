import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TRootState } from 'appRedux/types';
import { ELayout, ETheme, IViewState } from './viewTypes';

const initialState: IViewState = {
  theme: ETheme.BLUE,
  layout: ELayout.LIST,
};

const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ETheme>) => {
      state.theme = action.payload;
    },
    setLayout: (state, action: PayloadAction<ELayout>) => {
      state.layout = action.payload;
    },
  },
});

export const { setTheme, setLayout } = viewSlice.actions;
export default viewSlice.reducer;

export const selectTheme = (state: TRootState) => state.view.theme;
export const selectLayout = (state: TRootState) => state.view.layout;
