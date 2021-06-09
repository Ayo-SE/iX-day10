import React, { Component } from 'react';

import './TaskForm.css';

export default class TaskForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: ''
        };
    }

    buttonClick() {

        console.log("button was clicked");
    }

    onNameChanged(e) {
        this.setState({
            name: e.target.value
        });
    } 

    addTask(e) {

        e.preventDefault();

        //console.log(this.state.name);
        this.props.createTask(this.state.name);

        this.setState({
            name: ''
        });
        // TODO: name to prarent through props
    }
    render() {
        return (

            <div className="home">
                <form onSubmit={(e) => this.addTask(e)}>
                    <div className="input-group mb-3">
                        <input onChange={(e) => this.onNameChanged(e)}
                            value={this.state.name} 
                            type="text" 
                            className="form-control" 
                            placeholder="Task"/>
                        <button className="btn btn-outline-secondary" type="submit" /*onClick={() => this.buttonClick()}*/>
                            +
                        </button>
                    </div>
                </form>
            </div>
            
        )
    }
}
