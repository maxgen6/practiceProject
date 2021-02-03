import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import Home from './Components/Pages/Home/Home'
import Create from './Components/Pages/Create/Create'
import Tasks from './Components/Pages/Tasks/Tasks'
import TaskDetail from './Components/Pages/Tasks/TaskDetail/TaskDetail'
import TaskEdit from './Components/Pages/Tasks/TaskEdit/TaskEdit'



const App = () => {
    
  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/create" component={Create} />
            <Route path="/tasks" component={Tasks} />
            <Route path="/task/:id/edit" component={TaskEdit} />
            <Route path="/task/:id" component={TaskDetail} />


            <Redirect to="/" />
          </Switch>
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default App

