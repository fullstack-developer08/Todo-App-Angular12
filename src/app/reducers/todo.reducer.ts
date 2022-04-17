import { createReducer, on } from "@ngrx/store";
import { ADD_TODO, CLEAR_ALL, REMOVE_TODO } from "../actions/todo.actions";
import { ITodo } from "../models/todo.model";

export const INITIAL_STATE: ITodo[] = [];

export const todoReducer = createReducer(
  INITIAL_STATE,
  on(ADD_TODO, (state, payload) => {
    return Object.assign([], state, state.concat(payload));
  }),
  on(REMOVE_TODO, (state, payload) => {
    state = state.filter((data) => data._id !== payload.id);
    return state;
  }),
  on(CLEAR_ALL, () => {
    return INITIAL_STATE;
  })
);
