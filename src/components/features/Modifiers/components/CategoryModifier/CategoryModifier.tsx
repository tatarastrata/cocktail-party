import React from 'react';
import styles from './CategoryModifier.module.scss';
import { ICategoryModifierPropTypes } from './CategoryModifierPropTypes';
import { useSelector } from 'react-redux';
import { selectModifiers } from '../../../../../redux/features/modifiers/modifiersSlice';
import { Badge } from '@chakra-ui/react';

const CategoryModifier: React.FC<ICategoryModifierPropTypes> = ({}) => {
  const { categories } = useSelector(selectModifiers);

  return (
    <div className={styles.CategoryModifier}>
      {categories.map((category) => (
        <Badge key={category}>{category}</Badge>
      ))}
    </div>
  );
};

export default CategoryModifier;
