import React from "react";
import Sidebar from "./Sidebar";
// import Feed from "./Feed";
// import Widgets from "./Widgets";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Chat from './Chat';
import Widgets from "./Widgets";

function App() {
  return (
    // BEM
    <div className="App">

      <Router>
        <Sidebar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/chat' component={Chat} />
        </Switch>
      </Router>

      <Widgets />
      
    </div>
    
  );
}

export default App;
