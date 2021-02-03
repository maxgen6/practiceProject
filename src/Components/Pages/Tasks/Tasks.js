import React, { Component } from 'react'
import './Tasks.css'
import Task from './Task/Task'

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            disabled: true,
            taskDone: 0
        };
    }

    componentDidMount() {
        this.setState({ tasks: JSON.parse(localStorage.getItem('tasks'))
                        ? JSON.parse(localStorage.getItem('tasks'))
                        : [] })
    }

    setToLS = task => localStorage.setItem('tasks', JSON.stringify(task))

    doneHandler = () => {
        const tasks = [...this.state.tasks]
        let taskDone = this.state.taskDone

        tasks.map(item => item.status === 'Done' ? taskDone++ : taskDone)

        return taskDone
    }

    clickDoneHandler = id => {
        const tasks = [...this.state.tasks]
        const idx = tasks.findIndex(c => c.id === id)
        tasks[idx].status = 'Done'
        this.setState({tasks})
        this.setToLS(tasks)
    }

    clickTaskDelete = id => {
        const tasks = [...this.state.tasks]
        const idx = tasks.findIndex(c => c.id === id)
        tasks.splice(idx, 1)
        this.setState({tasks})
        this.setToLS(tasks)
    }

    deleteAllTask = () => {
        const tasks = [...this.state.tasks]
        tasks.splice(0, tasks.length)
        this.setState({tasks})
        this.setToLS(tasks)
    }

    clickTaskOpen = task => {
        this.props.history.push(`task/${task.id}`, task)
    }

    clickTaskEdit = task => {
        this.props.history.push(`task/${task.id}/edit`, task)
    }

    render() {
        return (
            <div className="todos">
                <div className="todos-block">
                    <p>Выполнено задач {this.doneHandler()} из {this.state.tasks.length} </p>
                    <button 
                        onClick={this.deleteAllTask} 
                        className="btn btn-danger">Удалить все задачи</button>
                </div>

                <hr/>

                <div className="tasks">
                    { this.state.tasks.length 
                        ? <Task
                            tasks={this.state.tasks}
                            clickDoneHandler={this.clickDoneHandler}
                            clickTaskDelete={this.clickTaskDelete}
                            clickTaskOpen={this.clickTaskOpen}
                            clickTaskEdit={this.clickTaskEdit}

                            />
                        : <h1>Задач нету</h1>    
                    }

                </div>
            </div>
        )
    }
}

export default Tasks
