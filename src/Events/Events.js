import React from 'react'
import './Events.css'
import EventContext from '../EventContext'
import moment from 'moment'

class Events extends React.Component {
    static contextType = EventContext
    static defaultProps = {
        events:{}
    }

    render() {
        let startTime = this.props.events.start_date_time
        let startTimeFormatted = moment(startTime).format("MMM DD, hh:mm a")
        return(
            <div className = "event" onClick = {(event) => {
                event.stopPropagation()
                this.context.setCurrentEvent(this.props.events)
            }}>
                <div className="listItem">
                    <p className="eventTitle">{this.props.events.title}</p>
                    <div className="eventTimes">
                        <p>{startTimeFormatted}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Events