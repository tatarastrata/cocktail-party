import React from 'react';
import { useFormikContext } from 'formik';
import {
  ESearchFormCocktailFields,
  ISearchFormCocktailValues,
  TCategoryOption,
} from '../../SearchTypes';
import { useSelector } from 'react-redux';
import { ECategories, selectModifiers } from 'appRedux/features/modifiers';
import { Select } from 'components/atoms';
import { TOption } from 'components/atoms/Select';
import { MultiValue } from 'react-select';
import { convertToSelectOptions } from 'utils/convertToSelectOptions.util';

const CategoriesFilter: React.FC = () => {
  const { setFieldValue } = useFormikContext<ISearchFormCocktailValues>();
  const { categories: availableCategories } = useSelector(selectModifiers);

  const handleOptionSelect = (selectedOptions: MultiValue<TCategoryOption>) => {
    const values: Array<ECategories> = selectedOptions.map(
      (option) => option.value
    );

    setFieldValue(ESearchFormCocktailFields.CATEGORIES, values);
  };

  return (
    <Select
      placeholder="Categories"
      options={convertToSelectOptions(availableCategories)}
      handleSelect={handleOptionSelect as (values: MultiValue<TOption>) => void}
      fieldName={ESearchFormCocktailFields.CATEGORIES}
    />
  );
};

export default CategoriesFilter;
