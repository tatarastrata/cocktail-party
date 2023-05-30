import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getListOfCategories,
  getListOfGlasses,
  getListOfIngredients,
  getListOfAcloholicDrinks,
} from 'services/api';
import { TModifiers, IAlcoholicDrink } from './modifiersTypes';
import { mapResponseDataModifiers } from 'utils/mapResponseData.utils';

// Async thunk actions
export const fetchCategories = createAsyncThunk<TModifiers>(
  'modifiers/fetchCategories',
  async () => {
    const response = await getListOfCategories();
    const categories = mapResponseDataModifiers(response);
    return categories;
  }
);

export const fetchGlasses = createAsyncThunk<TModifiers>(
  'modifiers/fetchGlasses',
  async () => {
    const response = await getListOfGlasses();
    const glasses = mapResponseDataModifiers(response);
    return glasses;
  }
);

export const fetchIngredients = createAsyncThunk<TModifiers>(
  'modifiers/fetchIngredients',
  async () => {
    const response = await getListOfIngredients();
    const ingredients = mapResponseDataModifiers(response);
    return ingredients;
  }
);

export const fetchAlcoholicDrinks = createAsyncThunk<IAlcoholicDrink[]>(
  'modifiers/fetchAlcoholicDrinks',
  async () => {
    const response = await getListOfAcloholicDrinks();
    return response.drinks;
  }
);

// Other actions
export const selectCategory = (category: string) => {
  return { type: 'modifiers/selectCategory', payload: category };
};

// Export all actions
export const modifiersActions = {
  fetchCategories,
  fetchGlasses,
  fetchIngredients,
  fetchAlcoholicDrinks,
  selectCategory,
};
