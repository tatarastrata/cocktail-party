import React from 'react';
import { useFormikContext } from 'formik';
import {
  ESearchFormCocktailFields,
  ISearchFormCocktailValues,
} from '../../SearchTypes';
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

const SearchInput: React.FC = ({}) => {
  const {
    values: { name },
    handleChange,
    setFieldValue,
  } = useFormikContext<ISearchFormCocktailValues>();

  const clearInput = () => {
    setFieldValue(ESearchFormCocktailFields.NAME, '');
  };

  return (
    <InputGroup size="md">
      <Input
        placeholder="Start typing cocktail"
        size="md"
        name={ESearchFormCocktailFields.NAME}
        value={name}
        onChange={handleChange}
      />
      <InputRightElement>
        <Button
          size="sm"
          onClick={clearInput}
          variant={'ghost'}
          isDisabled={name.length === 0}
        >
          x
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchInput;
