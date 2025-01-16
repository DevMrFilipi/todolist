// import "./Main.css"
import React, { Component } from 'react';

import { FaPlus } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
    counter: 1,
  };

  contador = (counter) => {
    counter = counter + 1;
    return counter;
  };

  handleSubmit = (e) => {
    let inputMain = document.querySelector('.inputMain');
    this.setState({
      newTask: e.target.value,
      counter: this.contador(this.state.counter),
    });
    this.componentGenerate(inputMain.value);
    inputMain.value = '';
    return;
  };

  componentGenerate = (task) => {
    const taskContainer = document.querySelector('.taskContainer');
    const taskComponent = document.createElement('p');
    const textTaskComponent = document.createElement('a');
    textTaskComponent.innerHTML += `${this.state.counter} | ${task}`;
    taskComponent.appendChild(textTaskComponent);
    taskContainer.appendChild(taskComponent);
  };

  render() {
    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <form action="#">
          <input className="inputMain"></input>
          <button type="submit" onClick={this.handleSubmit}>
            <FaPlus />
          </button>
        </form>
        <div className="taskContainer"></div>
      </div>
    );
  }
}
