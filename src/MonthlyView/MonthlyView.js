import React from 'react'
import moment from 'moment'
import DayNames from '../DayNames/DayNames'
import './MonthlyView.css'
import Cells from '../Cells/Cells'

class MonthlyView extends React.Component {

    render() {
        
        let firstDay = moment().startOf("month").day();
        let lastDay = moment().endOf("month").day();
        let daysInMonth = moment().daysInMonth();
        
        let allDays = []
        for (let i = 0; i < firstDay; i++) {
            let momentObject = moment().startOf("month").startOf("week").add(i,"days")
            allDays.push(
                <Cells 
                    className = "emptyDay"
                    className2 = "monthDayNumber" 
                    content = {momentObject.date()} 
                    contentISOString = {momentObject.toISOString() }  
                    key={momentObject.toISOString()} 
                />
            )
        }

        for (let d = 0; d < daysInMonth; d++) {
            allDays.push(
                <Cells 
                    className = "calendarDay" 
                    className2 = "monthDayNumber"
                    content = {d+1} 
                    contentISOString = {moment().startOf("month").add(d,"days").toISOString()}  
                    key={moment().startOf("month").add(d,"days").toISOString()} 
                />
            )
        }

        for (let i = 0; i < 6 - lastDay; i++) {
            let momentObject = moment().endOf("month").add(i + 1, "days")
            allDays.push(
                <Cells 
                    className = "emptyDay" 
                    className2 = "monthDayNumber"
                    content = {momentObject.date()} 
                    contentISOString = {momentObject.toISOString()}  
                    key={momentObject.toISOString()} 
                />
            )
        }

        let rows = []
        let cells = []
        allDays.forEach((row, i) => {
            if (i % 7 !==0) {
                cells.push(row)
            }
            else {
                rows.push(cells)
                cells=[]
                cells.push(row)
            }
            if (i === allDays.length-1) {
                rows.push(cells)
            }
        })

        let monthDays = rows.map((d,i) => {
            return <div className="monthDays" key={"day" + i}>{d}</div>
        })

        return(
                <div className="monthView">
                    <div className="nameofDays">
                        <DayNames/>
                    </div>
                    <div className="numberedDays">
                        {monthDays}
                    </div>
                </div>
        )
    }
}

export default MonthlyView