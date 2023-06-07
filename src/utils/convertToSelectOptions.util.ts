import { TOption } from 'components/atoms/Select';

export const convertToSelectOptions = (list: Array<string>): Array<TOption> => {
  return list.map((item) => ({
    value: item,
    label: item,
  }));
};
