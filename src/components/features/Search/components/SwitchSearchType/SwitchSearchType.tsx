import React from 'react';
import { ISwitchSearchTypePropTypes } from './SwitchSearchTypePropTypes';
import { FormControl, FormLabel, Switch } from '@chakra-ui/react';

const SwitchSearchType: React.FC<ISwitchSearchTypePropTypes> = ({
  isChecked,
  onChange,
  label,
}) => {
  return (
    <FormControl display="flex" alignItems="center">
      <Switch id="search-type" isChecked={isChecked} onChange={onChange} />
      <FormLabel htmlFor="search-type" mb="0" ml={2}>
        {label}
      </FormLabel>
    </FormControl>
  );
};

export default SwitchSearchType;
