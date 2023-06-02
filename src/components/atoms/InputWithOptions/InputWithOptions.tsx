import React, { useEffect, useState } from 'react';
import {
  IInputWithOptionsPropTypes,
  TOption,
} from './InputWithOptionsPropTypes';
import { Box, Button, Input, List, ListItem } from '@chakra-ui/react';
import { colors } from 'styles/colors';
import { useSelector } from 'react-redux';
import { selectCocktailsDetails } from 'appRedux/features/detailsCocktail';

const dropDownProps = {
  position: 'absolute',
  zIndex: 1,
  marginTop: '0.5rem',
  left: 0,
  right: 0,
  maxHeight: '12rem',
  width: '100%',
  overflow: 'auto',
  backgroundColor: colors.blue[600],

  boxShadow:
    'rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px',
  border: 'none',

  opacity: 1,
  transform: 'none',
  transition:
    'opacity 284ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 189ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
};

const buttonProps = {
  backgroundColor: colors.blue[600],
  fontWeight: 'normal',
  _hover: {
    backgroundColor: colors.blue[700],
  },
};

const InputWithOptions: React.FC<IInputWithOptionsPropTypes> = ({
  inputValue,
  setInputValue,
  options,
  onOptionSelect,
  showAccordion = true,
}) => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const selectedCocktail = useSelector(selectCocktailsDetails);

  useEffect(() => {
    options.length === 0 && setIsOptionsVisible(false);
    setIsOptionsVisible(false);
  }, [options]);

  useEffect(() => {
    selectedCocktail && setInputValue(selectedCocktail?.name);
  }, [selectedCocktail]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    setIsOptionsVisible(value.length > 0);
  };

  const handleOptionSelect = (option: TOption) => {
    setInputValue(option.label);
    setIsOptionsVisible(false);
    onOptionSelect(option.id);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
    }
  };

  return (
    <Box position={'relative'} width="100%" bg={colors.green}>
      <Input
        w="100%"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Start entering cocktail"
      />
      {isOptionsVisible && showAccordion && (
        <List sx={{ ...dropDownProps }} onKeyDown={handleKeyDown}>
          {options
            .filter((option) =>
              option.label.toLowerCase().startsWith(inputValue.toLowerCase())
            )
            .map((option) => (
              <ListItem key={option.id} p={'0 1rem'}>
                <Button
                  variant="ghost"
                  onClick={() => handleOptionSelect(option)}
                  w={'100%'}
                  justifyContent={'flex-start'}
                  sx={buttonProps}
                >
                  {option.label}
                </Button>
              </ListItem>
            ))}
        </List>
      )}
    </Box>
  );
};

export default InputWithOptions;
