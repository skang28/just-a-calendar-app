import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import CalendarHome from '../CalendarHome/CalendarHome'
import EventForm from '../EventForm/EventForm'
import EventContext from '../EventContext'

class App extends React.Component {
  state = {
    events: [{
      id: 1,
      title: 'test event 1',
      location: 'test location 1',
      start_date_time: '2020-04-15T21:27:36.311Z',
      end_date_time: '2020-04-16T21:27:36.311Z',
      description: 'test description 1',
      user_id: 'test_user_1'
    },
    {
      id: 2,
      title: 'test event 2',
      location: 'test location 2',
      start_date_time: '2020-04-17T21:27:36.311Z',
      end_date_time: '2020-04-27T21:27:36.311Z',
      description: 'test description 2',
      user_id: 'test_user_2'
    },
    {
      id: 3,
      title: 'test event 3',
      location: 'test location 3',
      start_date_time: '2020-04-09T21:27:36.311Z',
      end_date_time: '2020-04-12T21:27:36.311Z',
      description: 'test description 3',
      user_id: 'test_user_3'
    }],
    viewType: 'monthly',
    currentEvent: null
  }

  setViewType = (viewType) => {
    this.setState({viewType})
  }

  addEvent = (event) => {
    let events = this.state.events
    events.push(event)
    this.setState({events: [...events, event]})
  }

  updateEvent = (event) => { 
    let events = this.state.events 
    let index=events.findIndex(function(ele){ return ele.id === event.id }) 
    events.splice(index,1); 
    this.setState({events: [...events, event]}) 
  }

  setCurrentEvent = (event) => {
    this.setState({currentEvent: event})
  }

  deleteEvent = (event) => {
    let events = this.state.events
    let index=events.findIndex(function(ele){ return ele.id === event.id }) 
    events.splice(index,1); 
    this.setState({events: [...events]})
  }




  
  render () {
    return(
      <EventContext.Provider value = {{events: this.state.events, setCurrentEvent: this.setCurrentEvent}}>
          <main className="app-main">
            <Route exact path = '/' render = {(props) => <CalendarHome {...props} events = {this.state.events} currentEvent = {this.state.currentEvent} viewType = {this.state.viewType} setViewType = {this.setViewType}/>}/>
            <Route exact path = '/event/' render = {(props) => <EventForm {...props} events = {this.state.events} submitEvent = {this.addEvent}/>} />
            <Route path = '/event/:id' render = {(props) => <EventForm {...props} events = {this.state.events} submitEvent = {this.updateEvent} { ...this.state.events.find(function(ele){return props.match.params.id == ele.id})}/>}  />
          </main>
      </EventContext.Provider>
    )
  }
}

export default App;
