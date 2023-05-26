import {
  ETodosActions,
  ITodosState,
  TTodosActionTypes,
} from '../types/todosTypes';

const initialState: ITodosState = {
  todos: [],
};

const todosReducer = (
  state: ITodosState = initialState,
  action: TTodosActionTypes
) => {
  switch (action.type) {
    case ETodosActions.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case ETodosActions.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default todosReducer;
