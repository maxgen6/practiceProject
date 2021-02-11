import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";

import Home from "./Pages/Home/Home";
import Create from "./Pages/Create/Create";
import Tasks from "./Pages/Tasks/Tasks";
import TaskDetail from "./Components/TaskDetail/TaskDetail";
import TaskEdit from "./Components/TaskEdit/TaskEdit";

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
  );
};

export default App;
