import React from 'react'
import moment from 'moment'
import './DayNames.css'

// renders the names of the days of the week for calendar
class DayNames extends React.Component {
    render() {
        let weekdays = moment.weekdaysShort().map(day => {
            return(
                <span key={day} className="day">{day}</span>
            )
        })
        return(
            <div className="dayNames">
                {weekdays}
            </div>
        )
    }
}

export default DayNames