import { combineReducers } from '@reduxjs/toolkit';
import cocktailReducer from './features/cocktails/cocktailsSlice';
import ingredientsReducer from './features/ingredients/ingredientsSlice';
import detailsOfCocktailReducer from './features/detailsCocktail/detailsCocktailSlice';
import modifiersReducer from './features/modifiers/modifiersSlice';
import userMenuReducer from './features/userMenu/userMenuSlice';

const rootReducer = combineReducers({
  cocktails: cocktailReducer,
  ingredients: ingredientsReducer,
  detailsOfCocktail: detailsOfCocktailReducer,
  modifiers: modifiersReducer,
  userMenu: userMenuReducer,
});

export default rootReducer;
