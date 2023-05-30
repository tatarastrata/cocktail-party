import { ICocktail } from 'appRedux/features/cocktails/cocktailsTypes';

export interface IDetailsCocktailState {
  cocktail: ICocktail | null;
  showDetails: boolean;
}
