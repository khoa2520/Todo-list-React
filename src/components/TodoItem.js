import React from "react";
class TodoItem extends React.Component {
  render() {
    return (
      <li className="todo-item">
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={() => this.props.handleChange(this.props.todo.id)}
        />
        <span className={this.props.todo.completed ? "completed" : null}>
          {" "}
          {this.props.todo.title}{" "}
        </span>
      </li>
    );
  }
}
export default TodoItem;
