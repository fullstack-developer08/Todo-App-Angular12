import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { todoReducer } from "./reducers/todo.reducer";
import { TodoDashboardComponent } from "./todo-dashboard/todo-dashboard.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, TodoDashboardComponent, TodoListComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      todos: todoReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
