import React from 'react';
import { TIconPropTypes } from './IconPropTypes';
import { Icon as ChakraIcon } from '@chakra-ui/react';

// to change the size and boxSize={6} prop to the component
const Icon: React.FC<TIconPropTypes> = ({ svgPath, ...props }) => {
  return (
    <ChakraIcon viewBox="0 0 128 128" boxSize={6} {...props}>
      <svg
        enableBackground="new 0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
      >
        {svgPath}
      </svg>
    </ChakraIcon>
  );
};

export default Icon;
