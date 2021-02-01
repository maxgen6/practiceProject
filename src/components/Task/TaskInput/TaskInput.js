import React, { Component } from 'react'

class TaskInput extends Component {
    state = {
        input: ''
    }
    
    addTask = () => {
        const {input} = this.state
        if(input) {
            this.props.addTask(input);
            this.setState({ input : ''})
        }
        
    }

    inputChange = e => {
        this.setState({ input: e.target.value})
    }

    render() {
        const {input} = this.state;

        return (
            <div className="task-input">
                <input onChange={this.inputChange} type="text" value={input}/>
                <button onClick={this.addTask}>ADD</button>
            </div>
        )
    }
}

export default TaskInput
