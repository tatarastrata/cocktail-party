import React from 'react';
import styles from './AlcoholicModifier.module.scss';
import { IAlcoholicModifierPropTypes } from './AlcoholicModifierPropTypes';
import { useSelector } from 'react-redux';
import { selectModifiers } from '../../../../../redux/features/modifiers/modifiersSlice';

const AlcoholicModifier: React.FC<IAlcoholicModifierPropTypes> = ({}) => {
  const { alcoholicDrinks } = useSelector(selectModifiers);

  console.log(alcoholicDrinks);

  return <div className={styles.AlcoholicModifier}>AlcoholicModifier</div>;
};

export default AlcoholicModifier;
