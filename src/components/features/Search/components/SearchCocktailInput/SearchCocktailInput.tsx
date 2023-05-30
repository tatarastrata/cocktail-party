import React, { useEffect, useState } from 'react';
import {
  ISearchCocktailInputPropTypes,
  TOptionValue,
} from './SearchCocktailInputPropTypes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCocktailsByFirstLetter } from '../../../../../redux/features/cocktails/cocktailsActions';
import { selectCocktails } from '../../../../../redux/features/cocktails/cocktailsSlice';
import { TAppDispatch } from '../../../../../redux/types';
import { colors } from '../../../../../styles/theme';
import { Select } from '@chakra-ui/react';

const SearchCocktailInput: React.FC<ISearchCocktailInputPropTypes> = ({}) => {
  const [input, setInput] = useState('');
  const [options, setOptions] = useState<TOptionValue[] | []>([]);

  const dispatch: TAppDispatch = useDispatch();

  const cocktails = useSelector(selectCocktails);

  useEffect(() => {
    input.length === 1 && dispatch(fetchCocktailsByFirstLetter(input));
  }, [dispatch, input]);

  useEffect(() => {
    setOptions(
      cocktails.length
        ? cocktails.map((cocktail) => ({
            label: cocktail.name,
            id: cocktail.id,
          }))
        : []
    );
  }, [cocktails]);

  return (
    <>
      <input onChange={(e) => setInput(e.target.value)} value={input} />
      <Select
        sx={{
          backgroundColor: colors.primary.main,
        }}
      >
        {options.map((opt) => (
          <p key={opt.id}>{opt.label}</p>
        ))}
      </Select>
    </>
  );
};

export default SearchCocktailInput;
