import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { ADD_TODO, CLEAR_ALL } from "../actions/todo.actions";
import { IAppState } from "../models/app.model";
import { ITodo } from "../models/todo.model";

@Component({
  selector: "app-todo-dashboard",
  templateUrl: "./todo-dashboard.component.html"
})
export class TodoDashboardComponent implements OnInit {
  constructor(private store: Store<IAppState>) {}

  ngOnInit() {}

  model: ITodo = {
    _id: 0,
    desc: "",
    priority: "",
    lastUpdate: new Date()
  };

  onSubmitTodo(todo) {
    if (todo.valid) {
      this.model = todo.value;
      this.store.dispatch(
        ADD_TODO({
          todo: this.model
        })
      );
      console.log(todo.value);
    }
  }

  clearAll() {
    this.store.dispatch(CLEAR_ALL());
  }
}
