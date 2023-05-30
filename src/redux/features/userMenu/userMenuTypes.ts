import { ICocktail } from '../cocktails/cocktailsTypes';

export interface IUserMenuState {
  showMenu: boolean;
  menu: Array<ICocktail>;
}
