import * as actionTypes from "../actions/actionTypes";

const initialState = {
  tasks: [],
};

export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_TASKS_SUCCESS:
      return {
        ...state,
        tasks: action.tasks,
      };
    case actionTypes.SET_TASKS_TO_LS:
      return {
        ...state,
        tasks: localStorage.setItem("tasks", JSON.stringify(action.tasks)),
      };
    case actionTypes.FETCH_TASKS_FROM_LS:
      return {
        ...state,
        tasks: action.tasks,
      };
    case actionTypes.DELETE_TASK_HANDLER:
      return {
        ...state,
        tasks: action.tasks,
      };
    case actionTypes.CLICK_TASK_DONE:
      return {
        ...state,
        tasks: action.tasks,
      };
    case actionTypes.DELETE_ALL_TASKS:
      return {
        ...state,
        tasks: action.tasks,
      };
    case actionTypes.CREATE_NEW_TASK:
      return {
        ...state,
        tasks: action.tasks,
      };
    case actionTypes.UPDATE_TASK:
      return {
        ...state,
        tasks: action.tasks,
      };
    default:
      return state;
  }
}
