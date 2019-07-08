import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import Todos from "./components/Todos";
import AddForm from "./components/AddForm";

export default class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Shayo lowa" },
      { id: 2, content: "Carry Ashana" }
    ]
  };

  deleteTodo = id => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };

  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <hr />
        <AddForm addTodo={this.addTodo} />
      </div>
    );
  }
}
