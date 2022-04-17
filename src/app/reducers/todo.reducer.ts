import { createReducer, on } from "@ngrx/store";
import { ADD_TODO } from "../actions/todo.actions";
import { ITodo } from "../models/todo.model";

export const INITIAL_STATE: ITodo[] = [];

export const todoReducer = createReducer(
  INITIAL_STATE,
  on(ADD_TODO, (state, action) => {
    action.payload.id = state.length + 1;
    return Object.assign([], state, state.concat(action.payload));
  })
);
