import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { REMOVE_TODO, TOOGLE_TODO } from "../actions/todo.actions";
import { IAppState } from "../models/app.model";
import { ITodo } from "../models/todo.model";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
})
export class TodoListComponent implements OnInit {
  todos$: Observable<ITodo[]>;

  constructor(private store: Store<IAppState>) {
    this.todos$ = this.store.select("todos");
    this.todos$.subscribe(console.log);
  }

  ngOnInit() {}

  removeTodo(id) {
    this.store.dispatch(REMOVE_TODO({ id }));
  }

  toogleTodo(id) {
    this.store.dispatch(
      TOOGLE_TODO({
        todoId: id,
      })
    );
  }
}
