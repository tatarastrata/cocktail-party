import React from 'react';
import { IIngredientsAndMeasuresPropTypes } from './IngredientsAndMeasuresPropTypes';
import { useSelector } from 'react-redux';
import { selectCocktailsDetails } from 'appRedux/features/detailsCocktail';
import { Table } from 'components/atoms';

const IngredientsAndMeasures: React.FC<
  IIngredientsAndMeasuresPropTypes
> = ({}) => {
  const cocktail = useSelector(selectCocktailsDetails);

  if (!cocktail) return null;

  const { measures } = cocktail;

  return (
    <Table
      data={measures.map(({ ingredient, measure }) => ({
        key: ingredient,
        value: measure,
      }))}
      isNumeric
    />
  );
};

export default IngredientsAndMeasures;
