import React from 'react';
import { useSelector } from 'react-redux';
import { selectModifiers } from 'appRedux/features/modifiers/modifiersSlice';
import { Badge } from '@chakra-ui/react';

const CategoryModifier: React.FC = () => {
  const { categories } = useSelector(selectModifiers);

  return (
    <div style={{ display: 'none' }}>
      {categories.map((category) => (
        <Badge key={category}>{category}</Badge>
      ))}
    </div>
  );
};

export default CategoryModifier;
