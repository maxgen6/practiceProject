import { CLICK_TASK_DONE, 
        CREATE_NEW_TASK, 
        DELETE_ALL_TASKS, 
        DELETE_TASK_HANDLER, 
        FETCH_TASKS_FROM_LS, 
        GET_TASKS_SUCCESS, 
        SET_TASKS_TO_LS, 
        UPDATE_TASK} from "../actions/actionTypes"


const initialState = {
    tasks: []
}

export default function tasksReducer(state = initialState, action) {

    switch(action.type) {
        case GET_TASKS_SUCCESS: 
            return {
                ...state, tasks: action.tasks
            }
        case SET_TASKS_TO_LS:
            return {
                ...state, tasks: localStorage.setItem("tasks", JSON.stringify(action.tasks))
            }
        case FETCH_TASKS_FROM_LS:
            return {
                ...state, tasks: action.tasks
            }
        case DELETE_TASK_HANDLER: 
            return {
                ...state, tasks: action.tasks
            }
        case CLICK_TASK_DONE:
            return {
                ...state, tasks: action.tasks
            }
        case DELETE_ALL_TASKS:
            return {
                ...state, tasks: action.tasks
            }
        case CREATE_NEW_TASK:
            return {
                ...state, tasks: action.tasks
            }
        case UPDATE_TASK:
            return {
                ...state, tasks: action.tasks
            }
        default:
            return state
    }
}