import { createSlice } from '@reduxjs/toolkit';
import { TRootState } from 'appRedux/types';
import { IDetailsCocktailState } from './detailsCocktailTypes';

const initialState: IDetailsCocktailState = {
  showDetails: false,
  cocktail: null,
};

const detailsCocktailSlice = createSlice({
  name: 'detailsOfCocktail',
  initialState,
  reducers: {
    showDetails: (state, action) => {
      state.showDetails = true;
      state.cocktail = action.payload;
    },
    hideDetails: (state) => {
      state.showDetails = false;
      state.cocktail = null;
    },
  },
});

export const { showDetails, hideDetails } = detailsCocktailSlice.actions;
export default detailsCocktailSlice.reducer;

export const selectCocktailsDetails = (state: TRootState) =>
  state.detailsOfCocktail.cocktail;
