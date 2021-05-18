import React, {Component} from 'react'

class Form extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: ''
        };

        this.updateText = this.updateText.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(e) {
        this.props.addTask(this.state.title, this.state.description)
        e.preventDefault()
    }
    updateText(e) {
        console.log(e.target.name, e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        this.props.addTask();
        return(
            <form onSubmit= {this.onSubmit}>
                <input 
                    type= "text" 
                    name= "title"
                    placeholder= "write a task" 
                    onChange= {this.updateText} 
                    value = {this.state.title} />
                <br/>
                <textarea 
                    name= "description"
                    placeholder= "wirte a description task" 
                    onChange= {this.updateText} 
                    value = {this.state.description}>
                </textarea>
                <input type= "submit" />
            </form>
        )
    }
}

export default Form