export interface IInputWithOptionsPropTypes {
  inputValue: string;
  setInputValue: (values: string) => void;
  options: Array<TOption>;
  onOptionSelect: (id: string) => void;
  showAccordion?: boolean;
}

export type TOption = {
  label: string;
  id: string;
};
