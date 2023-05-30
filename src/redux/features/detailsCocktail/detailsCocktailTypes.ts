import { ICocktail } from '../cocktails/cocktailsTypes';

export interface IDetailsCocktailState {
  cocktail: ICocktail | null;
  showDetails: boolean;
}
