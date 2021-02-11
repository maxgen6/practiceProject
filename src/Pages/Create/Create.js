import React, { Component } from 'react'
import './Create.css'
import {connect} from 'react-redux'
import {
    getTasks,
    setToLS,
    createTask
    } from '../../store/actions/tasks'

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            disabled: true,
        };
    }

    componentDidMount() {
        this.props.getTasks()
    }

    btnDisabled = e => this.setState({ disabled: e.target.value ? false : true })

    setToLS = tasks => this.props.setToLS(tasks)

    createTask = e => {
        e.preventDefault()
        this.props.createTask()
        // const tasks = [...this.state.tasks]
        // let title = document.querySelector('#title').value
        // let description = document.querySelector('#description').value

        // const newTask = {
        //     id: Math.random().toString(36).substring(7),
        //     title,
        //     description : description ? description : 'Описание отсутствует',
        //     status: 'Not'
        // }

        // tasks.push(newTask)
        // this.setState({tasks})
        // this.setToLS(tasks)
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

function mapStateToProps(state) {
    return {
        tasks: state.tasks.tasks
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getTasks: () => dispatch(getTasks()),
        setToLS: task => dispatch(setToLS(task)),
        createTask: () => dispatch(createTask())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create)
