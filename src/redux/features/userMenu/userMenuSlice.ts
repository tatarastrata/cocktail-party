import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUserMenuState } from './userMenuTypes';
import { ICocktail } from '../cocktails/cocktailsTypes';
import { TRootState } from '../../types';

const initialState: IUserMenuState = {
  showMenu: false,
  menu: [],
};

const userMenuSlice = createSlice({
  name: 'userMenu',
  initialState,
  reducers: {
    openMenu(state) {
      state.showMenu = true;
    },
    closeMenu(state) {
      state.showMenu = false;
    },
    addCocktail(state, action: PayloadAction<ICocktail>) {
      state.menu.push(action.payload);
    },
    removeCocktail(state, action: PayloadAction<string>) {
      state.menu = state.menu.filter(
        (cocktail) => cocktail.id !== action.payload
      );
    },
  },
});

export const { closeMenu, openMenu, addCocktail, removeCocktail } =
  userMenuSlice.actions;
export default userMenuSlice.reducer;
export const selectUserMenu = (state: TRootState) => state.userMenu;
