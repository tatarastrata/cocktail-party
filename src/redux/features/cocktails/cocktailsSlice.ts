import { createSlice } from '@reduxjs/toolkit';
import { ICocktailsState } from './cocktailsTypes';
import { TRootState } from '../../types';
import {
  fetchCocktailById,
  fetchCocktailByName,
  fetchCocktailsByFirstLetter,
  fetchRandomCocktail,
} from './cocktailsActions';

const initialState: ICocktailsState = {
  cocktails: [],
  loading: false,
  error: null,
};

const cocktailsSlice = createSlice({
  name: 'cocktails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCocktailByName.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCocktailByName.fulfilled, (state, action) => {
        state.loading = false;
        state.cocktails = action.payload || [];
      })
      .addCase(fetchCocktailByName.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      })

      .addCase(fetchCocktailsByFirstLetter.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCocktailsByFirstLetter.fulfilled, (state, action) => {
        state.loading = false;
        state.cocktails = action.payload || [];
      })
      .addCase(fetchCocktailsByFirstLetter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      })

      .addCase(fetchCocktailById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCocktailById.fulfilled, (state, action) => {
        state.loading = false;
        state.cocktails = action.payload || [];
      })
      .addCase(fetchCocktailById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      })

      .addCase(fetchRandomCocktail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRandomCocktail.fulfilled, (state, action) => {
        state.loading = false;
        state.cocktails = action.payload || [];
      })
      .addCase(fetchRandomCocktail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default cocktailsSlice.reducer;

export const selectCocktails = (state: TRootState) => state.cocktails.cocktails;
export const selectLoading = (state: TRootState) => state.cocktails.loading;
export const selectError = (state: TRootState) => state.cocktails.error;
