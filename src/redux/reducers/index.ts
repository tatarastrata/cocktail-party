import { combineReducers } from 'redux';
import todosReducer from './todosReducer';
import { IRootState } from '../types';

const rootReducer = combineReducers<IRootState>({
  todos: todosReducer,
});

export default rootReducer;
