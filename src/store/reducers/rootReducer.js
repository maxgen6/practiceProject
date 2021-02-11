import { combineReducers } from 'redux'
import tasksReducer from './tasks.js'

export default combineReducers({
    tasks: tasksReducer
})