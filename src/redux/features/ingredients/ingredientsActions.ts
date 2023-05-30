import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  lookupIngredientById,
  searchIngredientByName,
} from '../../../services/api';

export const fetchIngredientByName = createAsyncThunk(
  'ingredients/fetchByName',
  async (name: string) => {
    const response = await searchIngredientByName(name);
    return response.ingredients;
  }
);

export const fetchIngredientById = createAsyncThunk(
  'ingredients/fetchById',
  async (id: string) => {
    const response = await lookupIngredientById(id);
    return response.ingredients;
  }
);
