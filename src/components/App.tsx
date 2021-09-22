import React from 'react';
import { connect } from 'react-redux';
import { Todo, deleteTodo, fetchTodos } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

function _App({ fetchTodos, deleteTodo, todos }: AppProps) {
  function renderList(): JSX.Element[] {
    return todos.map((todo) => (
      <div key={todo.id}>
        {todo.title}
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    ));
  }

  return (
    <div>
      <button onClick={() => fetchTodos()}>Fetch</button>
      {renderList()}
    </div>
  );
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return {
    todos
  };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
