import React from 'react'
import './Events.css'
import EventContext from '../EventContext'

class Events extends React.Component {
    static contextType = EventContext
    static defaultProps = {
        events:{}
    }

    render() {
        return(
            <div className = "event" onClick = {(event) => {
                event.stopPropagation()
                this.context.setCurrentEvent(this.props.events)
            }}>
                <p className="eventTitle">{this.props.events.title}</p>
            </div>
        )
    }
}

export default Events