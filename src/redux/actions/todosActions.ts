import { ETodosActions } from '../types/todosTypes';
import { v4 as uuidv4 } from 'uuid';

export const addTodo = (text: string) => ({
  type: ETodosActions.ADD_TODO,
  payload: { text, id: uuidv4(), completed: false },
});

export const removeTodo = (id: string) => ({
  type: ETodosActions.REMOVE_TODO,
  payload: id,
});
