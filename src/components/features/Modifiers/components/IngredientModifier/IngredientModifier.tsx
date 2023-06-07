import React from 'react';
import { selectModifiers } from 'appRedux/features/modifiers/modifiersSlice';
import { useSelector } from 'react-redux';

const IngredientModifier: React.FC = () => {
  const { ingredients } = useSelector(selectModifiers);

  return (
    <div style={{ display: 'none' }}>
      {ingredients.map((ingredient) => (
        <p key={ingredient}>{ingredient}</p>
      ))}
    </div>
  );
};

export default IngredientModifier;
