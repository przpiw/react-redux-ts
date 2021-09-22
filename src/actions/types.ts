import { FetchTodosAction, DeleteTodosAction } from "./todos";

export enum ActionTypes {
  FetchTodos,
  DeleteTodo
}

export type Action = FetchTodosAction | DeleteTodosAction