import React from 'react';
import {Route} from 'react-router-dom';
import './AuthApp.css';
import CalendarHome from '../CalendarHome/CalendarHome'
import EventForm from '../EventForm/EventForm'
import EventContext from '../EventContext'
import config from '../config'

//Authapp class sets up initial API calls and has routes for pages of app
class AuthApp extends React.Component {
  state = {
    events: [],
    viewType: 'monthly',
    currentEvent: null
  }

  componentDidMount() {
    let token = localStorage.getItem('token')
    fetch(`${config.API_ENDPOINT}/api/events`, {
      headers: {
        'Authorization': `bearer ${token}`
      }
    })
    .then(res => {
      if (res.status === 401) {
        this.props.history.push('/login')
        return
      }
      if(!res.ok) {
        throw 'error'
      }
      return res.json();
    })
    .then(events => {
      events = events.map((event) => {
        event.start_date_time+='Z'
        event.end_date_time+='Z'
        return event
      })
      this.setState({events:events})
    })
    .catch(error => {
      console.error({error});
    })
  }

  setViewType = (viewType) => {
    this.setState({viewType})
  }

  addEvent = (event) => {
    let token = localStorage.getItem('token')
    return fetch(`${config.API_ENDPOINT}/api/events`, {
      method: 'POST',
      body: JSON.stringify(event),
      headers:{
        'Content-type':'application/json',
        'Authorization':`bearer ${token}`
      }
    })
    .then(res => {
      if(res.status === 401) {
        this.props.history.push('/login')
        return
      }
      if(!res.ok) {
        throw res
      }
      return res.json()
    })
    .then(event => {
      event.start_date_time+='Z'
      event.end_date_time+='Z'
      this.setState({
        events: [...this.state.events, event]
      })
    })
  }

  updateEvent = (event) => { 
    let token = localStorage.getItem('token')
    return fetch(`${config.API_ENDPOINT}/api/events/${event.id}`, {
      method: 'PATCH',
      body: JSON.stringify(event),
      headers:{
        'Content-type':'application/json',
        'Authorization':`bearer ${token}`
      }
    })
    .then(res => {
      if(res.status === 401) {
        this.props.history.push('/login')
      }
      if(!res.ok) {
        throw res
      }
    })
    .then(eventRes => {
      let events = this.state.events 
      let index=events.findIndex(function(ele){ return ele.id === event.id }) 
      events.splice(index,1)
      this.setState({events: [...events, event]}) 
    })
  }

  setCurrentEvent = (event) => {
    this.setState({currentEvent: event})
  }

  deleteEvent = (event) => {
    let token = localStorage.getItem('token')
    fetch(`${config.API_ENDPOINT}/api/events/${event.id}`, {
      method: 'DELETE',
      headers: {
          'Authorization':`bearer ${token}`
      }
    })
    .then(res => {
      if(res.status === 401) {
        this.props.history.push('/login')
        return
      }
      if(!res.ok) {
        throw 'error'
      }
    })
    .then(eventRes => {
        let events = this.state.events
        let index=events.findIndex(function(ele){ return ele.id === event.id }) 
        events.splice(index,1); 
        this.setState({events: [...events]})
      })
    .catch(error => {
      console.log(error)
    })
  }

  render () {
    return(
      <EventContext.Provider value = {{events: this.state.events, setCurrentEvent: this.setCurrentEvent}}>
          <main className="authApp">
            <Route exact path = '/home' render = {(props) => <CalendarHome {...props} events = {this.state.events} currentEvent = {this.state.currentEvent} viewType = {this.state.viewType} setViewType = {this.setViewType} deleteEvent = {this.deleteEvent}/>}/>
            <Route exact path = '/home/event/' render = {(props) => <EventForm {...props} events = {this.state.events} submitEvent = {this.addEvent}/>} />
            <Route path = '/home/event/:id' render = {(props) => {
                let event = this.state.events.find(function(ele){return props.match.params.id == ele.id}) || {}
                event.event_location = event.location
                return <EventForm {...props} events = {this.state.events} submitEvent = {this.updateEvent} {...event}/>
            }}/>
          </main>
      </EventContext.Provider>
    )
  }
}

export default AuthApp