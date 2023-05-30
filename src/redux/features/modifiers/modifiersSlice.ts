import { createSlice } from '@reduxjs/toolkit';
import { IModifiersState } from './modifiersTypes';
import { modifiersActions } from './modifiersActions';
import { TRootState } from 'appRedux/types';

const initialState: IModifiersState = {
  categories: [],
  glasses: [],
  ingredients: [],
  alcoholicDrinks: [],
};

const modifiersSlice = createSlice({
  name: 'modifiers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(modifiersActions.fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(modifiersActions.fetchGlasses.fulfilled, (state, action) => {
        state.glasses = action.payload;
      })
      .addCase(modifiersActions.fetchIngredients.fulfilled, (state, action) => {
        state.ingredients = action.payload;
      })
      .addCase(
        modifiersActions.fetchAlcoholicDrinks.fulfilled,
        (state, action) => {
          state.alcoholicDrinks = action.payload;
        }
      );
  },
});

export default modifiersSlice.reducer;

export const selectModifiers = (state: TRootState) => state.modifiers;
