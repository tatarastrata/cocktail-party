import React, { useEffect } from 'react';
import CategoryModifier from './components/CategoryModifier';
import { useDispatch } from 'react-redux';
import { modifiersActions } from 'appRedux/features/modifiers/modifiersActions';
import { TAppDispatch } from 'appRedux/types';
import {
  IngredientModifier,
  AlcoholicModifier,
  GlassModifier,
} from 'components/features/Modifiers/components';

const Modifiers: React.FC = ({}) => {
  const dispatch: TAppDispatch = useDispatch();

  useEffect(() => {
    dispatch(modifiersActions.fetchCategories());
    dispatch(modifiersActions.fetchIngredients());
    dispatch(modifiersActions.fetchAlcoholicDrinks());
    dispatch(modifiersActions.fetchGlasses());
  }, [dispatch]);

  return (
    <div style={{ display: 'none' }}>
      <CategoryModifier />
      <IngredientModifier />
      <AlcoholicModifier />
      <GlassModifier />
    </div>
  );
};

export default Modifiers;
