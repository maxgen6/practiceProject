import * as actionTypes from "./actionTypes";

export function getTasks() {
  return (dispatch) => {
    dispatch(
      fetchTasksFromLs(
        JSON.parse(localStorage.getItem("tasks"))
          ? JSON.parse(localStorage.getItem("tasks"))
          : []
      )
    );
  };
}

export function fetchTasksFromLs(tasks) {
  return {
    type: actionTypes.FETCH_TASKS_FROM_LS,
    tasks,
  };
}

export function getTasksSuccess(tasks) {
  return {
    type: actionTypes.GET_TASKS_SUCCESS,
    tasks,
  };
}

export function setToLS(tasks) {
  return (dispatch) => {
    dispatch(setTasksToLS(tasks));
  };
}

export function setTasksToLS(tasks) {
  return {
    type: actionTypes.SET_TASKS_TO_LS,
    tasks,
  };
}

export function clickTaskDelete(id) {
  return (dispatch, getState) => {
    const state = getState().tasks;
    const tasks = [...state.tasks];
    const idx = tasks.findIndex((c) => c.id === id);
    tasks.splice(idx, 1);
    dispatch(setTasksToLS(tasks));
    dispatch(deleteTaskHandler(tasks));
  };
}

export function deleteTaskHandler(tasks) {
  return {
    type: actionTypes.DELETE_TASK_HANDLER,
    tasks,
  };
}

export function clickTaskDoneHandler(id) {
  return (dispatch, getState) => {
    const state = getState().tasks;

    const tasks = [...state.tasks];
    const idx = tasks.findIndex((c) => c.id === id);
    tasks[idx].status = "Done";
    dispatch(setTasksToLS(tasks));
    dispatch(clickTaskDone(tasks));
  };
}

export function clickTaskDone(tasks) {
  return {
    type: actionTypes.CLICK_TASK_DONE,
    tasks,
  };
}

export function clickAllTaskDelete() {
  return (dispatch, getState) => {
    const state = getState().tasks;
    const tasks = [...state.tasks];
    tasks.splice(0, tasks.length);
    dispatch(setTasksToLS(tasks));
    dispatch(deleteAllTasks(tasks));
  };
}

export function deleteAllTasks(tasks) {
  return {
    type: actionTypes.DELETE_ALL_TASKS,
    tasks,
  };
}

export function createTask() {
  return (dispatch, getState) => {
    const state = getState().tasks;

    const tasks = [...state.tasks];
    let title = document.querySelector("#title").value;
    let description = document.querySelector("#description").value;

    const newTask = {
      id: Math.random().toString(36).substring(7),
      title,
      description: description ? description : "Описание отсутствует",
      status: "Not",
    };

    tasks.push(newTask);
    dispatch(setTasksToLS(tasks));
    dispatch(createNewTask(tasks));
    document.querySelector("#title").value = "";
    document.querySelector("#description").value = "";
  };
}

export function createNewTask(tasks) {
  return {
    type: actionTypes.CREATE_NEW_TASK,
    tasks,
  };
}

export function updateTaskHandler(id) {
  return (dispatch, getState) => {
    const state = getState().tasks;

    const tasks = [...state.tasks];
    let idx = tasks.findIndex((c) => c.id === id);
    let titleEdit = document.querySelector(".inputEdit__title").value;
    let descriptionEdit = document.querySelector(".inputEdit__description")
      .value;
    tasks[idx].title = titleEdit;
    tasks[idx].description = descriptionEdit;

    dispatch(setTasksToLS(tasks));
    dispatch(updateTask(tasks));
  };
}

export function updateTask(tasks) {
  return {
    type: actionTypes.UPDATE_TASK,
    tasks,
  };
}
