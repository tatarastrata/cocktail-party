export enum ETheme {
  WHITE = 'white',
  BLUE = 'blue',
  ORANGE = 'orange',
}

export enum ELayout {
  LIST = 'list',
  SINGLE = 'single',
}

export interface IViewState {
  theme: ETheme;
  layout: ELayout;
}
