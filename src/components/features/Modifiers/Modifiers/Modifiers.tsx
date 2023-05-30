import React, { useEffect } from 'react';
import styles from './Modifiers.module.scss';
import { IModifiersPropTypes } from './ModifiersPropTypes';
import CategoryModifier from '../components/CategoryModifier';
import { useDispatch } from 'react-redux';
import { modifiersActions } from '../../../../redux/features/modifiers/modifiersActions';
import { TAppDispatch } from '../../../../redux/types';
import IngredientModifier from '../components/IngredientModifier';
import AlcoholicModifier from '../components/AlcoholicModifier';
import GlassModifier from '../components/GlassModifier';

const Modifiers: React.FC<IModifiersPropTypes> = ({}) => {
  const dispatch: TAppDispatch = useDispatch();

  useEffect(() => {
    dispatch(modifiersActions.fetchCategories());
    dispatch(modifiersActions.fetchIngredients());
    dispatch(modifiersActions.fetchAlcoholicDrinks());
    dispatch(modifiersActions.fetchGlasses());
  }, [dispatch]);

  return (
    <div className={styles.Modifiers}>
      <CategoryModifier />
      <IngredientModifier />
      <AlcoholicModifier />
      <GlassModifier />
    </div>
  );
};

export default Modifiers;
