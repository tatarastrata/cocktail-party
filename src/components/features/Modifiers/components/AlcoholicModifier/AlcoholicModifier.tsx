import React from 'react';
import { useSelector } from 'react-redux';
import { selectModifiers } from 'appRedux/features/modifiers/modifiersSlice';

const AlcoholicModifier: React.FC = () => {
  const { alcoholicDrinks } = useSelector(selectModifiers);

  return (
    <div style={{ display: 'none' }}>
      {alcoholicDrinks.map((drink) => (
        <span key={drink.strAlcoholic}>{drink.strAlcoholic}</span>
      ))}
    </div>
  );
};

export default AlcoholicModifier;
