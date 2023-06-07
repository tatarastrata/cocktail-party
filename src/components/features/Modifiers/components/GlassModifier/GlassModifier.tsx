import React from 'react';
import { useSelector } from 'react-redux';
import { selectModifiers } from 'appRedux/features/modifiers/modifiersSlice';

const GlassModifier: React.FC = () => {
  const { glasses } = useSelector(selectModifiers);

  return (
    <div style={{ display: 'none' }}>
      {glasses.map((glass) => (
        <span key={glass}>{glass}</span>
      ))}
    </div>
  );
};

export default GlassModifier;
