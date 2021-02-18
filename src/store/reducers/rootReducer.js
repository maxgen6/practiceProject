import { combineReducers } from 'redux'
import tasksReducer from './tasks.js'
import userReducer  from './user.js'

export default combineReducers({
    tasks: tasksReducer,
    user: userReducer
})