import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { ADD_TODO, CLEAR_ALL } from "../actions/todo.actions";
import { IAppState } from "../models/app.model";
import { ITodo } from "../models/todo.model";
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: "app-todo-dashboard",
  templateUrl: "./todo-dashboard.component.html",
})
export class TodoDashboardComponent implements OnInit {
  constructor(private store: Store<IAppState>) {}

  ngOnInit() {}

  model: Partial<ITodo> = {};

  onSubmitTodo(todo) {
    if (todo.valid) {
      this.model = todo.value;
      this.model._id = uuidv4();
      this.model.isCompleted = false;
      this.model.lastUpdate = new Date();
      console.log(this.model);
      this.store.dispatch(ADD_TODO(this.model));
      console.log(todo.value);
    }
  }

  clearAll() {
    this.store.dispatch(CLEAR_ALL());
  }
}
