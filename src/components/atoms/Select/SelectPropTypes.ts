import { MultiValue } from 'react-select';

export type TOption = {
  value: string;
  label: string;
};

export interface ISelectPropTypes {
  options: Array<TOption>;
  handleSelect: (values: MultiValue<TOption>) => void;
  fieldName: string;
  placeholder: string;
}
