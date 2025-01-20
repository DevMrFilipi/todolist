// import "./Main.css"
import React, { Component } from 'react';

import { FaEdit, FaPlus, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: '',
      tasks: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let { newTask } = this.state;
    const { tasks } = this.state;
    newTask = newTask.trim();

    if (tasks.indexOf(newTask) !== -1) return;

    const newsTasks = [...tasks];

    this.setState({
      tasks: [...newsTasks, newTask],
    });
  }

  handleChange(e) {
    this.setState({
      newTask: e.target.value,
    });
  }

  render() {
    const { newTask, tasks } = this.state;
    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input
            className="inputMain"
            type="text"
            onChange={this.handleChange}
            value={newTask}
          ></input>
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tasks">
          {tasks.map((task) => (
            <li key={task}>
              {task}
              <span>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
