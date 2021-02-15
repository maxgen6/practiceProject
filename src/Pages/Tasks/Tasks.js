import React, { Component } from "react";
import "./Tasks.css";
import Task from "../../Components/Task";
import { connect } from "react-redux";
import {
  getTasks,
  clickTaskDelete,
  setToLS,
  clickTaskDoneHandler,
  clickAllTaskDelete,
} from "../../store/actions/tasks";

class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskDone: 0,
    };

    this.doneHandler = this.doneHandler.bind(this);
  }

  componentDidMount() {
    this.props.getTasks();
  }

  setToLS = (tasks) => this.props.setToLS(tasks);

  doneHandler() {
    // this.props.doneHandlerTask()
    const tasks = [...this.props.tasks];
    let taskDone = this.state.taskDone;

    tasks.map((item) => (item.status === "Done" ? taskDone++ : taskDone));

    return taskDone;
  }

  clickDoneHandler = (id) => {
    this.props.clickTaskDoneHandler(id);
    // const tasks = [...this.state.tasks];
    // const idx = tasks.findIndex((c) => c.id === id);
    // tasks[idx].status = "Done";
    // this.setState({ tasks });
    // this.setToLS(tasks);
  };

  clickTaskDelete = (id) => {
    this.props.clickTaskDelete(id);
    // const tasks = [...this.state.tasks];
    // const idx = tasks.findIndex((c) => c.id === id);
    // tasks.splice(idx, 1);
    // this.setState({ tasks });
    // this.setToLS(tasks);
  };

  deleteAllTask = () => {
    this.props.clickAllTaskDelete();
    // const tasks = [...this.state.tasks];
    // tasks.splice(0, tasks.length);
    // this.setState({ tasks });
    // this.setToLS(tasks);
  };

  clickTaskOpen = (task) => {
    this.props.history.push(`task/${task.id}`, task);
  };

  clickTaskEdit = (task) => {
    this.props.history.push(`task/${task.id}/edit`, task);
  };

  render() {
    return (
      <div className="todos">
        <div className="todos-block">
          <p>
            Выполнено задач {this.doneHandler()} из {this.props.tasks.length}
          </p>
          <button onClick={this.deleteAllTask} className="btn btn-danger">
            Удалить все задачи
          </button>
        </div>

        <hr />

        <div className="tasks">
          {this.props.tasks.length ? (
            <Task
              tasks={this.props.tasks}
              clickDoneHandler={this.clickDoneHandler}
              clickTaskDelete={this.clickTaskDelete}
              clickTaskOpen={this.clickTaskOpen}
              clickTaskEdit={this.clickTaskEdit}
            />
          ) : (
            <h1>Задач нету</h1>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks.tasks,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTasks: () => dispatch(getTasks()),
    setToLS: (task) => dispatch(setToLS(task)),
    clickTaskDelete: (id) => dispatch(clickTaskDelete(id)),
    clickTaskDoneHandler: (id) => dispatch(clickTaskDoneHandler(id)),
    clickAllTaskDelete: () => dispatch(clickAllTaskDelete()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
