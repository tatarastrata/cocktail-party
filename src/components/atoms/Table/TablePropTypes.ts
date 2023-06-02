export interface ITablePropTypes {
  data: Array<{
    key: string;
    value: string | number;
  }>;
  isNumeric?: boolean;
}
