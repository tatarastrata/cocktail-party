import { ITodosState, TTodosActionTypes } from './todosTypes';

export interface IRootState {
  todos: ITodosState;
}

export type TActionTypes = TTodosActionTypes;
