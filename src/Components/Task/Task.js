import React from 'react'
import './Task.css'

const Task = props => {
    return (
        props.tasks.map(task => {
            
            return (
            <div key={task.id} className={task.status === 'Not' ? 'task' : 'task task__done'}>
                <div className="title">{task.title}</div>

                <div className="btn-block">
                    <button 
                        onClick={props.clickTaskOpen.bind(null, task)}
                        className="btn btn-primary">Открыть</button>
                    {task.status === 'Not' 
                        ?   <>
                                <button 
                                    onClick={props.clickDoneHandler.bind(null, task.id)} 
                                    className="btn btn-success">Выполнено</button>
                                <button
                                    onClick={props.clickTaskEdit.bind(null, task)} 
                                    className="btn btn-warning">Редактировать</button>
                            </> 
                        : null
                    }
                    
                    <button 
                        onClick={props.clickTaskDelete.bind(null, task.id)}
                        className="btn btn-danger">Удалить</button>
                </div>
            </div>
            )
        })   
    )
}

export default Task
