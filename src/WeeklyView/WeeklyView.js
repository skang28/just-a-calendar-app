import React from 'react'
import moment from 'moment'
import DayNames from '../DayNames/DayNames'
import Cells from '../Cells/Cells'
import './WeeklyView.css'

//weekly view of calendar
class WeeklyView extends React.Component {
        
    render() {
        let allDays = [];

        for (let i = 0 ; i < 7; i++) {
            let momentObject = moment().startOf("week").add(i, "days")
            allDays.push(
                <Cells 
                    className="weekCalendarDays"
                    className2="weekdayNumber"
                    content = {momentObject.date()} 
                    contentISOString = {momentObject.toISOString()}
                    key = {momentObject.toISOString()} 
                />
            )
        }

        return(
            <div>
                <div className="nameofDays">
                    <DayNames/>
                </div>
                <div className="weekDays">
                    {allDays}
                </div>
            </div>
        )
    }
}

export default WeeklyView