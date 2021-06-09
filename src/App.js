import React, { Component } from 'react';

import TaskForm from './components/TaskForm';
// import tasks from './components/tasks';

import TaskTable from './components/TaskTable';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap-icons/font/css/bootstrap-icons.css';

import './App.css';
import Task from './components/tasks';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };
  }

  onTaskCreated(taskName) {
    const task = new Task(taskName, false, null);

    this.state.tasks.push(task);
    this.setState({
      tasks: this.state.tasks
    });
  }

  // onTaskCompleted(task) {
  //   const updatedTasks = this.state.tasks.map(x => x.completed === true
  //      ? x.dateCompleted = Date.now() : 'Incomplete')
  //   this.setState({
  //     tasks: updatedTasks
  //   })
  // }
  
  onTaskUpdated(task) {
    const updatedTasks = this.state.tasks.map(x => x.id === task.id ? task : x)
    this.setState({
      tasks: updatedTasks
    });
  }

  onTaskRemove(task) {
    const updatedTasks = this.state.tasks.filter(x => x.id !== task.id)
    this.setState({
      tasks: updatedTasks
    });
  }

  render() {
    return (
      <div>
        <div className="container mt-3">

            <div className="card card-body">

                <h1 className="text-center">Todo List</h1>

                <hr />

                <p className="text-center">Our simple TODO list</p>

                <TaskForm createTask={(taskName) => this.onTaskCreated(taskName)}/>
                <TaskTable 
                tasks={this.state.tasks}
                updateTask={(task) => this.onTaskUpdated(task)}
                removeTask={(task) => this.onTaskRemove(task)}
                />
            </div>

        </div>
      </div>
    )
  }
}
