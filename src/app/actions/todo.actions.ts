import { createAction } from "@ngrx/store";

export const ADD_TODO = createAction(
  "[TodoList Component] ADD_TODO",
  (payload) => payload
);
export const REMOVE_TODO = createAction(
  "[TodoList Component] REMOVE_TODO",
  (payload) => payload
);
export const CLEAR_ALL = createAction("[TodoList Component] CLEAR_ALL");
export const TOOGLE_TODO = createAction(
  "[TodoList Component] TOOGLE_TODO",
  (payload) => payload
);
