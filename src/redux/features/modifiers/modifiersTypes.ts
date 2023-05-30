export enum EModifiers {
  CATEGORY = 'categories',
  GLASS = 'glass',
  INGREDIENT = 'ingredient',
  IS_ALCOHOLIC = 'IS_ALCOHOLIC',
}

export type TModifiers = Array<string>;

export interface IAlcoholicDrink {
  strAlcoholic: string;
}

export interface IModifiersState {
  categories: TModifiers;
  glasses: TModifiers;
  ingredients: TModifiers;
  alcoholicDrinks: IAlcoholicDrink[];
}
