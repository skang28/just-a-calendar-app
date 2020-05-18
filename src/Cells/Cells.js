import React from 'react'
import EventContext from '../EventContext'
import './Cells.css'

class Cells extends React.Component {

    static contextType = EventContext
    
    render() {
        let date = new Date(this.props.contentISOString)
        date.setDate(date.getDate()+1)

        let events = this.context.events.filter((event) => {
            console.log('day iso string',this.props.contentISOString, "event",event.start_date_time, "date",date, "content", this.props.content)
            return new Date(event.start_date_time).toISOString()>this.props.contentISOString && new Date(event.start_date_time).toISOString()<date.toISOString()
        })


        return(
            <div className={this.props.className}>
                <div>
                    {this.props.content}
                </div>
                <div className="eventsFilter">
                    {events.map((event) => {
                        return <div className="cellEvent" onClick = {(clickEvent) => {
                            clickEvent.stopPropagation()
                            this.context.setCurrentEvent(event)
                        }}>{event.title}</div>
                    })}
                </div>
            </div>
        )
    }
}

export default Cells