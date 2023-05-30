import React, { useEffect, useState } from 'react';
import {
  ISearchCocktailInputPropTypes,
  TOptionValue,
} from './SearchCocktailInputPropTypes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCocktailsByFirstLetter } from 'appRedux/features/cocktails/cocktailsActions';
import { selectCocktails } from 'appRedux/features/cocktails/cocktailsSlice';
import { TAppDispatch } from 'appRedux/types';

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

      {options.map((opt) => (
        <p key={opt.id}>{opt.label}</p>
      ))}
    </>
  );
};

export default SearchCocktailInput;
