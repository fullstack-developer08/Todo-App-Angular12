import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { REMOVE_TODO, TOOGLE_TODO } from "../actions/todo.actions";
import { IAppState } from "../models/app.model";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html"
})
export class TodoListComponent implements OnInit {
  todos$;

  constructor(private store: Store<IAppState>) {
    this.todos$ = this.store.select("todos");
  }

  ngOnInit() {}

  removeTodo(id) {
    this.store.dispatch(
      REMOVE_TODO({
        todoId: id
      })
    );
  }

  toogleTodo(id) {
    this.store.dispatch(
      TOOGLE_TODO({
        todoId: id
      })
    );
  }
}
