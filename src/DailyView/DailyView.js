import React from 'react';
import moment from 'moment';
import './DailyView.css';
import Cells from '../Cells/Cells';

class DailyView extends React.Component {
    render() {
        let currentDay = moment().date();
        let currentDayFormatted = moment().format("ddd");
        
        return(
            <div className="dailyViewWrapper">
                <span className="dayNumber">{currentDayFormatted}</span>
                <div>
                    <Cells 
                        className="singleDay" 
                        className2="singleDayNumber"
                        content={currentDay} 
                        contentISOString = {moment().startOf('day').toISOString()}
                    />
                </div>
            </div>
        )
    }
}

export default DailyView