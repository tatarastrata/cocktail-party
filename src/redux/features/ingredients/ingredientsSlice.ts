import { createSlice } from '@reduxjs/toolkit';
import { IIngredientsState } from './ingredientsTypes';
import {
  fetchIngredientById,
  fetchIngredientByName,
} from './ingredientsActions';

const initialState: IIngredientsState = {
  ingredients: [],
  loading: false,
  error: null,
};

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredientByName.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchIngredientByName.fulfilled, (state, action) => {
        state.loading = false;
        state.ingredients = action.payload || [];
      })
      .addCase(fetchIngredientByName.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      })

      .addCase(fetchIngredientById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchIngredientById.fulfilled, (state, action) => {
        state.loading = false;
        state.ingredients = action.payload || [];
      })
      .addCase(fetchIngredientById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default ingredientsSlice.reducer;
