import { Action, ThunkAction } from '@reduxjs/toolkit';
import { ICocktailsState } from './features/cocktails/cocktailsTypes';
import store from './store';

export interface IRootState {
  cocktails: ICocktailsState;
}

export type TAppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  IRootState,
  unknown,
  Action<string>
>;

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
