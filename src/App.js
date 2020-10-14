import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import AddServices from './components/AddServices/AddServices';

export const userInfo = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState([])
  return (
    <userInfo.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route  path='/home'>
            <Home/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/admin'>
            <AddServices/>
          </Route>
          <Route path='*'>
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
   
  </userInfo.Provider>
  );
}

export default App;
