import React from 'react'
import EventContext from '../EventContext'
import './Cells.css'

class Cells extends React.Component {

    static contextType = EventContext
    
    render() {
        let date = new Date(this.props.contentISOString)
        date.setDate(date.getDate()+1)
        //console.log(date)
        console.log(this.props.content)
        console.log(this.props.contentISOString)

        let events = this.context.events.filter((event) => {
            return event.start_date_time>this.props.contentISOString && event.start_date_time<date.toISOString()
        })
        console.log(events)

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