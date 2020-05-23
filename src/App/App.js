import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import LoginPage from '../LoginPage/LoginPage'
import Registration from '../Registration/Registration'
import AuthApp from '../AuthApp/AuthApp'
import HomePage from '../HomePage/HomePage'

class App extends React.Component {
  
  render () {
    let monthImages = ["https://wallpaperaccess.com/full/783289.jpg", 
      "https://wallpaperplay.com/walls/full/7/b/5/25468.jpg", 
      "https://wallpaperplay.com/walls/full/1/c/2/25470.jpg",
      "https://wallpaperplay.com/walls/full/b/c/8/25479.jpg",
      "https://wallpaperplay.com/walls/full/1/8/c/25496.jpg",
      "https://wallpaperplay.com/walls/full/1/0/8/25500.jpg",
      "https://wallpaperplay.com/walls/full/d/3/a/25511.jpg",
      "https://wallpaperplay.com/walls/full/3/0/4/43302.jpg",
      "https://wallpaperplay.com/walls/full/0/8/0/43303.jpg",
      "https://wallpaperplay.com/walls/full/c/f/a/43305.jpg",
      "https://wallpaperplay.com/walls/full/5/e/a/43312.jpg",
      "https://wallpaperplay.com/walls/full/5/9/a/43315.jpg"]

    return(
      <div className="wholeApp">
        <img src = {monthImages[new Date().getMonth()]}></img>
        <div className="appContent">
          <Switch>
            <Route exact path = '/' component = {HomePage} />
            <Route path = '/home' render = {(props) => <AuthApp {...props} />}/>  
            <Route exact path = '/login' render = {(props) => <LoginPage {...props}/>}/>
            <Route exact path = '/registration' render = {(props) => <Registration {...props} />}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
