export enum EModifiers {
  CATEGORY = 'categories',
  GLASS = 'glass',
  INGREDIENT = 'ingredient',
  IS_ALCOHOLIC = 'IS_ALCOHOLIC',
}

export enum ECategories {
  ORDINARY_DRINK = 'Ordinary Drink',
  COCKTAIL = 'Cocktail',
  SHAKE = 'Shake',
  OTHER_UNKNOWN = 'Other / Unknown',
  COCOA = 'Cocoa',
  SHOT = 'Shot',
  COFFEE_TEA = 'Coffee / Tea',
  HOMEMADE_LIQUEUR = 'Homemade Liqueur',
  PUNCH_PARTY_DRINK = 'Punch / Party Drink',
  BEER = 'Beer',
  SOFT_DRINK = 'Soft Drin',
}

export enum EAlcoholModifier {
  ALCOHOLIC = 'Alcoholic',
  NON_ALCOHOLIC = 'Non alcoholic',
  OPTIONAL_ALCOHOL = 'Optional alcohol',
}

export type TModifiers = Array<string>;

export interface IAlcoholicDrink {
  strAlcoholic: string;
}

export interface IModifiersState {
  categories: Array<ECategories>;
  glasses: TModifiers;
  ingredients: TModifiers;
  alcoholicDrinks: IAlcoholicDrink[];
}

export const enum ETags {
  ADULT = 'Adult',
  ALCOHOLIC = 'Alcoholic',
  ASIA = 'Asia',
  BEACH = 'Beach',
  BRAZILIAN = 'Brazilian',
  BREAKFAST = 'Breakfast',
  BRUNCH = 'Brunch',
  BUBBLY = 'Bubbly',
  CHRISTMAS = 'Christmas',
  CITRUS = 'Citrus',
  CLASSIC = 'Classic',
  CLEAR = 'Clear',
  COLD = 'Cold',
  COLOURFUL = 'Colourful',
  CONTEMPORARY_CLASSIC = 'Contemporary Classic',
  DAIRY = 'Dairy',
  DARK = 'Dark',
  DATE_NIGHT = 'Date Night',
  DINNER_PARTY = 'Dinner Party',
  DRUNK = 'Drunk',
  EXPENSIVE = 'Expensive',
  FRESH = 'Fresh',
  FROZEN = 'Frozen',
  FRUITY = 'Fruity',
  GERMAN = 'German',
  GREEN = 'Green',
  HALLOWEEN = 'Halloween',
  HANGOVER = 'Hangover',
  HOLIDAY = 'Holiday',
  IBA = 'IBA',
  LAZY = 'Lazy',
  MILD = 'Mild',
  NATURE = 'Nature',
  NEW_ERA = 'New Era',
  PASSION = 'Passion',
  REFRESHING = 'Refreshing',
  SAVORY = 'Savory',
  SHARP = 'Sharp',
  SHOT = 'Shot',
  SIMPLE = 'Simple',
  SOUR = 'Sour',
  SPANISH = 'Spanish',
  STRONG = 'Strong',
  STRONG_FLAVOR = 'Strong Flavor',
  SUMMER = 'Summer',
  SWEET = 'Sweet',
  USA = 'USA',
  VEGAN = 'Vegan',
  VEGETARIAN = 'Vegetarian',
  WINTER = 'Winter',
}
