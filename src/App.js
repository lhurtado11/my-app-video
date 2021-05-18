import React, { Component } from 'react';
import './App.css';
import tasks from './sample/tasks.json';
// importando componentes
import Form from './components/Form'
import Tasks from './components/Tasks';

class App extends Component {
    constructor() {
        super();
        this.state = {
            tasks: tasks,
        }
        this.addTask = this.addTask.bind(this)

    }
    addTask(title, description) {
        const newTask = {
            title: title,
            description: description,
            id: 45
        }
        this.setState({
            tasks: [...this.state.tasks, newTask] 
        })
    }
    render() {
        this.addTask()
        return(
            <div>
                <Form addTask= {this.addTask}/>
                <Tasks tasks={this.state.tasks}/>               
            </div>
        )
    }
}

export default App;