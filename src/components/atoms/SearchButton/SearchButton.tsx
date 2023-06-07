import React from 'react';
import { ISearchButtonPropTypes } from './SearchButtonPropTypes';
import { Button } from '@chakra-ui/react';

const SearchButton: React.FC<ISearchButtonPropTypes> = ({
  handleClick,
  isDisabled,
}) => {
  return (
    <Button onClick={handleClick} disabled={isDisabled}>
      Search
    </Button>
  );
};

export default SearchButton;
