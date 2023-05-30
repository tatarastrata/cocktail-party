import React from 'react';
import styles from './GlassModifier.module.scss';
import { IGlassModifierPropTypes } from './GlassModifierPropTypes';
import { useSelector } from 'react-redux';
import { selectModifiers } from '../../../../../redux/features/modifiers/modifiersSlice';

const GlassModifier: React.FC<IGlassModifierPropTypes> = ({}) => {
  const { glasses } = useSelector(selectModifiers);

  return (
    <div className={styles.GlassModifier}>
      {glasses.map((glass) => (
        <span key={glass}>{glass}</span>
      ))}
    </div>
  );
};

export default GlassModifier;
