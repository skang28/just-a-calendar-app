import React from 'react'
import Events from '../Events/Events'
import './EventsList.css'

class EventsList extends React.Component {
    static defaultProps = {
        events: []
    }
    render() {

        let events = this.props.events
        return(
            <div className="eventsWrapper">
                <p className="listTitle">My Events</p>
                <div className="upcomingEvents">
                    {events.length?
                        events.map((events, index) => <Events events = {events} key={"event" + index}/>)
                        :'There are no events yet'}
                </div>
                <button className="addEventButton" onClick = {() => this.props.history.push('/event')}>New Event</button>
            </div>
        )
    }
}

export default EventsList