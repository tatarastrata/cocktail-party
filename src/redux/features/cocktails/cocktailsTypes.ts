import { ECategories } from '../modifiers';

export type TMeasures = {
  ingredient: string;
  measure: string;
};

export interface ICocktail {
  id: string;
  isAlcoholic: boolean;
  category: ECategories;
  name: string;
  alternate: string;
  thumb: string;
  imgSrc: string;
  glass: string;
  IBA: string;
  ingredients: Array<string>;
  instructions: string;
  measures: Array<TMeasures>;
  tags: Array<string>;
}

// store state
export interface ICocktailsState {
  cocktails: ICocktail[];
  loading: boolean;
  error: string | null;
}
