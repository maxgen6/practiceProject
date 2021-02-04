import React, { Component } from 'react'

class TaskEdit extends Component {
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

    updateTask = id => {
        const tasks = [...this.state.tasks]

        
        let idx = tasks.findIndex(c => c.id === id)
        let titleEdit = document.querySelector('.inputEdit__title').value
        let descriptionEdit = document.querySelector('.inputEdit__description').value
        tasks[idx].title = titleEdit
        tasks[idx].description = descriptionEdit

        this.setState({ tasks })
        this.setToLS(tasks)
        this.props.history.push('/tasks')
    }
    
    
    render() {
        return (
            <div className="taskedit">
                <h1>Редактирование задачи</h1>
                <p>
                    <b>ID: </b>
                    {this.props.location.state.id} 
                </p>
                <p> 
                    <b>Название задачи: </b> 
                    <input type="text"
                        className="inputEdit inputEdit__title" 
                        defaultValue={this.props.location.state.title}/> 
                </p>
                <p> 
                    <b>Описание задачи: </b> 
                    <input type="text"
                        className="inputEdit inputEdit__description" 
                        defaultValue={this.props.location.state.description}/> 
                </p>
                <p> <b>Статус задачи: </b> {this.props.location.state.status}</p>

                <div className="btn-block">
                    <button 
                        onClick={() => this.props.history.push('/tasks')}
                        className="btn btn-warning">Назад</button>
                    <button 
                        onClick={this.updateTask.bind(null, this.props.location.state.id)} 
                        className="btn btn-success">Сохранить</button>
                </div>
            </div>
        )
    }
}

export default TaskEdit
