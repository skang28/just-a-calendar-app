import React from 'react'
import Events from '../Events/Events'
import './EventsList.css'

//renders the list of upcoming events on the left side of the calendar
class EventsList extends React.Component {
    static defaultProps = {
        events: []
    }
    render() {

        let events = this.props.events
        return(
            <div className="eventsWrapper">
                <p className="listTitle">Upcoming Events</p>
                <div className="upcomingEvents">
                    {events.length?
                        events.filter((event) => {
                            return event.end_date_time > new Date().toISOString()
                        }).sort((a,b) => {
                            if (a.start_date_time<b.start_date_time) {
                                return -1
                            }
                            else {
                                return 1
                            }
                        }).map((events, index) => <Events events = {events} key={"event" + index}/>)
                        :'There are no events yet'}
                </div>
                <button className="addEventButton" onClick = {() => this.props.history.push('/home/event')}>New Event</button>
            </div>
        )
    }
}

export default EventsList