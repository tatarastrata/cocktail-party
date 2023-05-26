// store state
export interface ITodosState {
  todos: ITodo[];
}

// store entity
export interface ITodo {
  id: string;
  text: string;
  completed?: boolean;
}

// action literals enum
export enum ETodosActions {
  ADD_TODO = 'ADD_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
}

// actions types
export interface IAddTodoAction {
  type: ETodosActions.ADD_TODO;
  payload: ITodo;
}

export interface IRemoveTodoAction {
  type: ETodosActions.REMOVE_TODO;
  payload: string;
}

export type TTodosActionTypes = IAddTodoAction | IRemoveTodoAction;
