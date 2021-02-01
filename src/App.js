import React, { Component } from 'react'
import Task from './components/Task/Task'
import TaskInput from './components/Task/TaskInput/TaskInput'

class App extends Component {
  state = {
    tasks: [
      { id: 0, title: 'Create to-do', done: false},
      { id: 1, title: 'Create to-do', done: true},
      { id: 2, title: 'Create to-do', done: false},
    ]
  }

  doneTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let {tasks} = state;
      tasks[index].done = true;
      return tasks
    })
  }

  deleteTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let {tasks} = state;
      delete tasks[index];
      return tasks
    })
  }

  addTask = task => {
    this.setState( state => {
      let { tasks } = state;
      tasks.push({
        id: tasks.length !== 0 ? tasks.length : 0,
        title: task,
        done : false
      });
      return tasks;
    })
  }

  render() {
    const activeTasks = this.state.tasks.filter(task => !task.done)
    const doneTasks = this.state.tasks.filter(task => task.done)


    return (
      <div className="App">
        <h1 className="top">Active tasks: {activeTasks.length}</h1>
        {[...activeTasks, ...doneTasks].map(task => (
          <Task  
            doneTask={() => this.doneTask(task.id)} 
            deleteTask={() => this.deleteTask(task.id)} 
            task={task} 
            key={task.id} 
          />
        ))}
        <TaskInput addTask={this.addTask} />
      </div>
    )
  }


}

export default App