import {
  ICocktail,
  TMeasures,
} from '../redux/features/cocktails/cocktailsTypes';
import { TModifiers } from '../redux/features/modifiers/modifiersTypes';
import { ICocktailModel, IModifiersModel } from '../services/models';

export const mapResponseDataCocktail = (data: ICocktailModel): ICocktail => {
  const ingredients: Array<string> = [];
  const entries = Object.entries(data);

  entries.forEach((entry) => {
    if (entry[0].includes('strIngredient') && entry[1] !== null) {
      ingredients.push(entry[1]);
    }
  });

  const measures: Array<TMeasures> = [];

  for (let i = 1; i <= 15; i++) {
    if (data[`strIngredient${i}`] !== null && data[`strMeasure${i}`] !== null) {
      measures.push({
        ingredient: data[`strIngredient${i}`],
        measure: data[`strMeasure${i}`],
      });
    }
  }

  return {
    id: data.idDrink,
    isAlcoholic: data.strAlcoholic === 'Alcoholic' ? true : false,
    category: data.strCategory,
    name: data.strDrink,
    alternate: data.strDrinkAlternate,
    thumb: data.strDrinkThumb,
    imgSrc: data.strImageSource,
    glass: data.strGlass,
    IBA: data.strIBA,
    ingredients,
    instructions: data.strInstructions,
    measures,
    tags: data.strTags,
  };
};

export const mapResponseDataModifiers = (data: IModifiersModel): TModifiers =>
  data.drinks.map((mod) => Object.values(mod)[0]);
