export interface IMenuBlockPropTypes {
  heading: string;
  list: Array<{ name: string; id: string }>;
  handleClick?: (id: string) => void;
}
