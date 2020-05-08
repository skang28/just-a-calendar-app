import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import LoginPage from '../LoginPage/LoginPage'
import Registration from '../Registration/Registration'
import AuthApp from '../AuthApp/AuthApp'

class App extends React.Component {
  
  render () {
    return(
      <div className="wholeApp">
        <Switch>
          <Route path = '/login' render = {(props) => <LoginPage {...props}/>}/>
          <Route path = '/registration' render = {(props) => <Registration {...props} />}/>
          <Route path = '/' render = {(props) => <AuthApp {...props} />}/>
        </Switch>
      </div>
    )
  }
}

export default App;
