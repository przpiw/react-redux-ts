import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionTypes } from './types'

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.FetchTodos,
  payload: Todo[]
}

export interface DeleteTodosAction {
  type: ActionTypes.DeleteTodo,
  payload: number
}

const url = 'https://jsonplaceholder.typicode.com/todos'
export const fetchTodos = () => {
  return async (dispath: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispath<FetchTodosAction>({ type: ActionTypes.FetchTodos, payload: response.data })
  }
}

export const deleteTodo = (id: number): DeleteTodosAction => {
  return {
    type: ActionTypes.DeleteTodo,
    payload: id
  }
}