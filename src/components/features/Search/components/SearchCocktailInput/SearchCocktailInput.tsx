import React, { useEffect, useState } from 'react';
import {
  ISearchCocktailInputPropTypes,
  TOptionValue,
} from './SearchCocktailInputPropTypes';
import { InputWithOptions } from 'components/atoms';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCocktailsByFirstLetter } from 'appRedux/features/cocktails/cocktailsActions';
import { selectCocktails } from 'appRedux/features/cocktails/cocktailsSlice';
import { TAppDispatch } from 'appRedux/types';
import { showDetails } from 'appRedux/features/detailsCocktail';
import { ELayout, selectLayout } from 'appRedux/features/view';

const SearchCocktailInput: React.FC<ISearchCocktailInputPropTypes> = ({}) => {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState<TOptionValue[]>([]);
  const dispatch: TAppDispatch = useDispatch();
  const cocktails = useSelector(selectCocktails);

  const layout = useSelector(selectLayout);

  const handleSelectCocktail = (id: string) => {
    dispatch(showDetails(cocktails.find((cocktail) => cocktail.id === id)));
  };

  useEffect(() => {
    if (inputValue.length === 1) {
      dispatch(fetchCocktailsByFirstLetter(inputValue));
    }
  }, [dispatch, inputValue]);

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

  useEffect(() => {
    setOptions((prev) =>
      prev.filter((option) =>
        option.label.toLowerCase().startsWith(inputValue.toLowerCase())
      )
    );
  }, [inputValue]);

  return (
    <InputWithOptions
      inputValue={inputValue}
      setInputValue={setInputValue}
      options={options}
      onOptionSelect={handleSelectCocktail}
      showAccordion={layout === ELayout.SINGLE}
    />
  );
};

export default SearchCocktailInput;
