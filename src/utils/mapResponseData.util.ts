import {
  ICocktail,
  TMeasures,
} from 'appRedux/features/cocktails/cocktailsTypes';
import { TModifiers } from 'appRedux/features/modifiers/modifiersTypes';
import { ICocktailModel, IModifiersModel } from 'services/models';

export const mapResponseDataCocktail = (data: ICocktailModel): ICocktail => {
  const entries = Object.entries(data);

  const ingredients: Array<string> = [];
  const measures: Array<TMeasures> = [];
  let tags: Array<string> = [];

  entries.forEach((entry) => {
    if (entry[0].includes('strIngredient') && entry[1] !== null) {
      ingredients.push(entry[1]);
    }
    if (entry[0].includes('strTag') && entry[1] !== null) {
      tags = [...entry[1].split(',')];
    }
  });

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
    tags: tags,
  };
};

export const mapResponseDataModifiers = (data: IModifiersModel): TModifiers =>
  data.drinks.map((mod) => Object.values(mod)[0]);
