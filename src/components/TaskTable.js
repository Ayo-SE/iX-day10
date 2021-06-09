import React, { Component } from 'react'

import './TaskTable.css'

export default class TaskTable extends Component {
      

    completeTask(task) {
      task.completed = !task.completed;

      this.props.updateTask(task);
    }

    removeTask(task) {
      this.props.removeTask(task);
    }

    // formatDate(date) {
    //   if (!date) { return ''; }
  
    //   let year = date.getFullYear();
    //   let month = (date.getMonth() + 1 + '').padStart(2, '0');
    //   let day = (date.getDay() + '').padStart(2, '0');
  
    //   return `${year}/${month}/${day}`;
    // }

    render() {
        return (
            <div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Task</th>
                      <th>Completion Check</th>
                      <th>Completed</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                        {
                        this.props.tasks.map(task => 
                            <tr key={task.id}>
                                <td>{task.name}</td>
                                <td onClick={() => this.completeTask(task)}>{task.completed ? 
                                  <i style={{cursor:'pointer'}} className="green bi bi-check-circle"></i> : 
                                  <i style={{cursor:'pointer'}} className="red bi bi-x-circle"></i>
                                }</td>
                                <td>{task.completed ? "task complete" : "task incomplete"}</td>
                                <td onClick={() => this.removeTask(task)} 
                                className="bi bi-trash"
                                style={{cursor:'pointer'}}
                                ></td>
                            </tr>)
                        }
                  </tbody>
                </table>
            </div>
        )
    }
}
