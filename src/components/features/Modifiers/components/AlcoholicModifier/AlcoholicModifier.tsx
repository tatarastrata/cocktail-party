import React from 'react';
import styles from './AlcoholicModifier.module.scss';
import { IAlcoholicModifierPropTypes } from './AlcoholicModifierPropTypes';
import { useSelector } from 'react-redux';
import { selectModifiers } from 'appRedux/features/modifiers/modifiersSlice';

const AlcoholicModifier: React.FC<IAlcoholicModifierPropTypes> = ({}) => {
  const { alcoholicDrinks } = useSelector(selectModifiers);

  return (
    <div className={styles.AlcoholicModifier} style={{ display: 'none' }}>
      {alcoholicDrinks.map((drink) => (
        <span key={drink.strAlcoholic}>{drink.strAlcoholic}</span>
      ))}
    </div>
  );
};

export default AlcoholicModifier;
