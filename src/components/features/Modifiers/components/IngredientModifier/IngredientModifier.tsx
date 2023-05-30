import React from 'react';
import styles from './IngredientModifier.module.scss';
import { IIngredientModifierPropTypes } from './IngredientModifierPropTypes';
import { selectModifiers } from '../../../../../redux/features/modifiers/modifiersSlice';
import { useSelector } from 'react-redux';
import { MenuItem, Select } from '@chakra-ui/react';

const IngredientModifier: React.FC<IIngredientModifierPropTypes> = ({}) => {
  const { ingredients } = useSelector(selectModifiers);

  return (
    <div className={styles.IngredientModifier}>
      <Select label="Ingredients">
        {ingredients.map((ingredient) => (
          <MenuItem key={ingredient}>{ingredient}</MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default IngredientModifier;
