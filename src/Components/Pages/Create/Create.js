import React, { Component } from 'react'
import './Create.css'

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            disabled: true,
            input: ''
        };
    }

    componentDidMount() {
        this.setState({ tasks: JSON.parse(localStorage.getItem('tasks'))
                        ? JSON.parse(localStorage.getItem('tasks'))
                        : [] })
    }

    btnDisabled = e => this.setState({ disabled: e.target.value ? false : true })

    setToLS = task => localStorage.setItem('tasks', JSON.stringify(task))

    createTask = e => {
        e.preventDefault()

        const tasks = [...this.state.tasks]
        let title = document.querySelector('#title').value
        let description = document.querySelector('#description').value

        const newTask = {
            id: Math.random().toString(36).substring(7),
            title,
            description : description ? description : 'Описание отсутствует',
            status: 'Not'
        }

        tasks.push(newTask)
        this.setState({tasks})
        this.setToLS(tasks)
        document.querySelector('#title').value = ''
        document.querySelector('#description').value = ''
        this.props.history.push('/tasks')
    }


    render() {
        return (
            <div className="create">

                <form className="form" onSubmit={this.createTask}>
                    <h1>Создание задачи</h1>
                    <input onInput={this.btnDisabled} type="text" id="title" placeholder="Название задачи"/>
                    <textarea id="description" placeholder="Описание задачи(не обязательно для заполнения)" />

                    <div className="button-block">
                        <button disabled={this.state.disabled} className="btn btn-success">Добавить задачу</button>
                        <button onClick={() => this.props.history.push('/tasks')} className="btn btn-primary">Просмотреть задачи</button>
                    </div>
                </form>

            </div>
        )
    }
}

export default Create