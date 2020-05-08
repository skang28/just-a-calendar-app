import React from 'react';
import moment from 'moment';
import './DailyView.css';
import Cells from '../Cells/Cells';

class DailyView extends React.Component {
    render() {
        let currentDay = moment().date();
        let currentDayFormatted = moment().format("ddd");
        
        return(
            <div>
                <span>{currentDayFormatted}</span>
                <div><Cells className="singleDay" content={currentDay} contentISOString = {moment().startOf('day').toISOString()}/></div>
            </div>
        )
    }
}

export default DailyView