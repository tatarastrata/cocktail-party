import { ECategories } from 'appRedux/features/modifiers';

export interface ISearchFormCocktailValues {
  [ESearchFormCocktailFields.NAME]: string;
  [ESearchFormCocktailFields.INGREDIENTS]?: Array<string>;
  [ESearchFormCocktailFields.CATEGORIES]?: Array<ECategories>;
  [ESearchFormCocktailFields.ALCOHOL]?: boolean | undefined;
}

export enum ESearchFormCocktailFields {
  NAME = 'name',
  INGREDIENTS = 'ingredients',
  CATEGORIES = 'categories',
  ALCOHOL = 'alcohol',
}

export type TCategoryOption = {
  value: ECategories;
  label: string;
};

export type TIngredientOption = {
  value: string;
  label: string;
};

export enum ESearchType {
  FILTERED = 'filtered',
  NAMED = 'named',
}
