import React from 'react';
import styles from './IngredientModifier.module.scss';
import { IIngredientModifierPropTypes } from './IngredientModifierPropTypes';
import { selectModifiers } from 'appRedux/features/modifiers/modifiersSlice';
import { useSelector } from 'react-redux';

const IngredientModifier: React.FC<IIngredientModifierPropTypes> = ({}) => {
  const { ingredients } = useSelector(selectModifiers);

  return (
    <div className={styles.IngredientModifier}>
      {ingredients.map((ingredient) => (
        <p key={ingredient}>{ingredient}</p>
      ))}
    </div>
  );
};

export default IngredientModifier;
