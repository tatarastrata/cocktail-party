import { HTMLInputTypeAttribute } from 'react';

export interface IFormControlPropTypes {
  fieldId: string;
  fieldName: string;
  placeholder?: string;
  label?: string;
  fieldType?: HTMLInputTypeAttribute;
}
