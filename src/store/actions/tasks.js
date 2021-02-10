import { 
    GET_TASKS_SUCCESS, 
     } from "./actionTypes"


export function getTasks() {
    return dispatch => {
        let tasks = []
        if (JSON.parse(localStorage.getItem("tasks")).length > 0) {
            tasks = JSON.parse(localStorage.getItem("tasks"))
        } else {
            tasks = []
            
        }

        dispatch(getTasksSuccess(tasks))
    }
}

export function getTasksSuccess(tasks) {
    return {
        type: GET_TASKS_SUCCESS,
        tasks
    }
}

export function setToLS(tasks) {
    return dispatch => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
        dispatch(getTasksSuccess(tasks))
    }
}

export function clickTaskDelete(id) {
    return (dispatch, getState) => {
        const state = getState().tasks
        const tasks = [...state.tasks];
        const idx = tasks.findIndex((c) => c.id === id);
        tasks.splice(idx, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks))
        dispatch(getTasksSuccess(tasks))
    }
}

export function clickTaskDone(id) {
    return (dispatch, getState) => {
        const state = getState().tasks

        const tasks = [...state.tasks];
        const idx = tasks.findIndex(c => c.id === id);
        tasks[idx].status = "Done";
        localStorage.setItem("tasks", JSON.stringify(tasks))
        dispatch(getTasksSuccess(tasks))
    }
}

export function clickAllTaskDelete() {
    return (dispatch, getState) => {
        const state = getState().tasks

        const tasks = [...state.tasks];
        tasks.splice(0, tasks.length);
        localStorage.setItem("tasks", JSON.stringify(tasks))
        dispatch(getTasksSuccess(tasks))
    }
}