import React from 'react'
import './CalendarHome.css'
import MonthlyView from '../MonthlyView/MonthlyView'
import WeeklyView from '../WeeklyView/WeeklyView'
import DailyView from '../DailyView/DailyView'
import EventsList from '../EventsList/EventsList'
import NavBar from '../NavBar/NavBar'
import EventModal from '../EventModal/EventModal'
import EventContext from '../EventContext'

class CalendarHome extends React.Component{
    static contextType = EventContext
    render() {
        let views={monthly: <MonthlyView />, daily: <DailyView />, weekly: <WeeklyView /> }
        console.log(this.context.events)

        return(
            <div className="homePage" onClick = {() => {
                this.context.setCurrentEvent(null)
            }}>
                <NavBar setViewType = {this.props.setViewType}/>
                <div className="calendarWrapper">
                    <div className="eventsList">
                        <EventsList history = {this.props.history} events = {this.props.events}/>
                    </div>
                    <div className="calendarView">
                        {views[this.props.viewType]}
                    </div>
                    <div>
                        {this.props.currentEvent && <EventModal currentEvent = {this.props.currentEvent}/>}
                    </div>
                </div>
            </div>
        )
    }
}

export default CalendarHome