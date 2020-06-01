import React from 'react'
import EventContext from '../EventContext'
import './Cells.css'

//creates the individual cells of the calendar, also inserts events into the calendar
class Cells extends React.Component {

    static contextType = EventContext
    
    render() {
        let date = new Date(this.props.contentISOString)
        date.setDate(date.getDate()+1)

        let events = this.context.events.filter((event) => {
            return new Date(event.start_date_time).toISOString()>=this.props.contentISOString && new Date(event.start_date_time).toISOString()<date.toISOString()
        })


        return(
            <div className={this.props.className}>
                <div className={this.props.className2}>
                    {this.props.content}
                </div>
                <div className="eventsFilter">
                    {events.map((event,index) => {
                        return <div className="cellEvent" onClick = {(clickEvent) => {
                            clickEvent.stopPropagation()
                            this.context.setCurrentEvent(event)
                        }} key={this.props.contentISOString + "event" + index}>{event.title}</div>
                    })}
                </div>
            </div>
        )
    }
}

export default Cells