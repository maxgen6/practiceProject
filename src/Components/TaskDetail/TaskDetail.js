import React, { Component } from 'react'
import './TaskDetail.css'

const TaskDetail = props => {
    const task = props.location.state

    return (
        <div className="taskdetail">
            <h1>Информация о задаче: </h1>
            <p> <b>ID: </b> {task.id}</p>
            <p> <b>Название задачи: </b> {task.title}</p>
            <p> <b>Описание задачи: </b> {task.description ? task.description : 'Опсиание отсутствует'}</p>
            <p> <b>Статус: </b> {task.status}</p>
            <button onClick={() => props.history.push('/tasks')} className="btn btn-warning">Назад</button>
        </div>

    )
}

export default TaskDetail
