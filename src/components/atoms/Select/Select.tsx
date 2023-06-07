import React from 'react';
import { ISelectPropTypes } from './SelectPropTypes';
import {
  ActionMeta,
  ChakraStylesConfig,
  MultiValue,
  Select as ReactSelect,
} from 'chakra-react-select';

const chakraStyles: ChakraStylesConfig = {
  container: (provided) => ({
    ...provided,
    w: '100%',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    background: 'transparent',
    p: '0.5rem',
    opacity: '0.5',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  multiValue: (provided) => ({
    ...provided,
    size: 'sm',
  }),
  option: (provided) => ({
    ...provided,
    fontSize: '0.8rem',
  }),
  multiValueRemove: (provided) => ({
    ...provided,
  }),
  clearIndicator: () => ({ display: 'none' }),
};

const Select: React.FC<ISelectPropTypes> = ({
  options,
  handleSelect,
  fieldName,
  placeholder,
}) => {
  return (
    <ReactSelect
      chakraStyles={chakraStyles}
      options={options}
      isMulti
      onChange={
        handleSelect as (
          newValue: MultiValue<unknown>,
          actionMeta: ActionMeta<unknown>
        ) => void
      }
      name={fieldName}
      placeholder={placeholder}
    />
  );
};

export default Select;
