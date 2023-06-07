import React from 'react';
import { useSelector } from 'react-redux';
import { selectModifiers } from 'appRedux/features/modifiers';
import { Select } from 'components/atoms';
import { convertToSelectOptions } from 'utils/convertToSelectOptions.util';
import {
  ESearchFormCocktailFields,
  ISearchFormCocktailValues,
  TIngredientOption,
} from '../../SearchTypes';
import { useFormikContext } from 'formik';
import { MultiValue } from 'chakra-react-select';

const IngredientsFilter: React.FC = () => {
  const { setFieldValue } = useFormikContext<ISearchFormCocktailValues>();
  const { ingredients: availableIngredients } = useSelector(selectModifiers);

  const handleOptionSelect = (
    selectedOptions: MultiValue<TIngredientOption>
  ) => {
    const values: Array<string> = selectedOptions.map((option) => option.value);

    setFieldValue(ESearchFormCocktailFields.INGREDIENTS, values);
  };
  return (
    <Select
      fieldName={ESearchFormCocktailFields.INGREDIENTS}
      options={convertToSelectOptions(availableIngredients)}
      handleSelect={handleOptionSelect}
      placeholder="Ingredients"
    />
  );
};

export default IngredientsFilter;
