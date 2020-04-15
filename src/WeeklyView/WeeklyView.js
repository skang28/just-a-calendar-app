import React from 'react'
import moment from 'moment'
import DayNames from '../DayNames/DayNames'
import Cells from '../Cells/Cells'
import './WeeklyView.css'

class WeeklyView extends React.Component {
        
    render() {

        let firstDay = moment().startOf("week").date();
        let lastDay = moment().endOf("month").date();
        let currentDay = moment().date();
        let dayOfWeek = moment().day();
        let currentDayWeek = moment().weekday();

        console.log([firstDay, lastDay, currentDay, dayOfWeek, currentDayWeek])

        let allDays = [];

        for (let i = 0 ; i < 7; i++) {
            let momentObject = moment().startOf("week").add(i, "days")
            allDays.push(
                <Cells className="weekCalendarDays" content = {momentObject.date()} contentISOString = {momentObject.toISOString()} />
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