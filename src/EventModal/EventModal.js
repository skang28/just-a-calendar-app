import React from 'react'
import moment from 'moment'
import './EventModal.css'

//renders a pop-up window with information on the selected event
class EventModal extends React.Component {
    static defaultProps = {
        currentEvent : {},
        history : {push: function(){}}
    }
    render() {
        let start_time_formatted = moment(this.props.currentEvent.start_date_time).format("dddd, MMMM Do YYYY, h:mm a")
        let end_time_formatted = moment(this.props.currentEvent.end_date_time).format("dddd, MMMM Do YYYY, h:mm a")
        return(
            <div className="eventModal">
                <p>Title: {this.props.currentEvent.title}</p>
                <p>Location: {this.props.currentEvent.location}</p>
                <p>Start: {start_time_formatted}</p>
                <p>End: {end_time_formatted}</p>
                <p>Description: {this.props.currentEvent.description}</p>
                <button className="modalButton" onClick = {() => {
                    this.props.history.push(`/home/event/${this.props.currentEvent.id}`)
                }}>Edit Event</button>
                <button className="modalButton" onClick = {() => {
                    this.props.deleteEvent({
                        id: this.props.currentEvent.id,
                    })
                }}>Delete Event</button>
            </div>
        )
    }
}

export default EventModal