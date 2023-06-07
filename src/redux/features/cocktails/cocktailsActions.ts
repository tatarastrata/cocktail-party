import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  listCocktailsByFirstLetter,
  lookupCocktailById,
  lookupRandomCocktail,
  searchCocktailByName,
  searchCocktailsWithFilters,
} from 'services/api';
import { mapResponseDataCocktail } from 'utils';
import { ICocktail } from './cocktailsTypes';
import { ISearchCocktailWithFiltersPropTypes } from 'services/models';

export const fetchCocktailByName = createAsyncThunk(
  'cocktails/fetchByName',
  async (name: string) => {
    const response = await searchCocktailByName(name);
    return response.drinks;
  }
);

export const fetchCocktailsByFirstLetter = createAsyncThunk<
  ICocktail[],
  string
>('cocktails/fetchByFirstLetter', async (letter: string) => {
  const response = await listCocktailsByFirstLetter(letter);
  const cocktails = response.drinks.map((cocktail) =>
    mapResponseDataCocktail(cocktail)
  );
  return cocktails;
});

export const fetchCocktailById = createAsyncThunk(
  'cocktails/fetchById',
  async (id: string) => {
    const response = await lookupCocktailById(id);
    return response.drinks;
  }
);

export const fetchRandomCocktail = createAsyncThunk(
  'cocktails/fetchRandom',
  async () => {
    const response = await lookupRandomCocktail();
    return response.drinks;
  }
);

export const fetchCocktailsWithFilters = createAsyncThunk(
  'cocktails/fetchWithFilters',
  async ({
    ingredients,
    tags,
    categories,
    alcohol,
    searchInput,
  }: ISearchCocktailWithFiltersPropTypes) => {
    const response = await searchCocktailsWithFilters({
      ingredients,
      tags,
      categories,
      alcohol,
      searchInput,
    });

    const cocktails = await Promise.all(
      response.drinks.map(async ({ idDrink }) => {
        const cocktailsResponse = await lookupCocktailById(idDrink);
        return mapResponseDataCocktail(cocktailsResponse.drinks[0]);
      })
    );
    console.log(cocktails);

    return cocktails;
  }
);
