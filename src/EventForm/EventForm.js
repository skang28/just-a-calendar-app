import React from 'react'
import './EventForm.css'
import moment from 'moment'

class EventForm extends React.Component {

    static defaultProps = {
        title: '',
        location: '',
        start_date_time: '2020-04-15T21:27:36.311Z',
        end_date_time: '2020-04-16T21:27:36.311Z',
        description: '',
      }

    render() {

        let numDays = moment().daysInMonth()

        let dayOption = []
        for (let i=1 ; i<numDays+1; i++) {
            dayOption.push(<option value={i}>{i}</option>)
        }

        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        let monthOption = months.map((month, index) => {
            return <option value={index}>{month}</option>
        })

        return(
            <div className="addEditEvent">
                <header className="formHeader">
                    <h2>Add/Edit Event</h2>
                </header>
                <form className="eventform" onSubmit = {(event) => {
                        event.preventDefault()
                        let startDate = new Date(new Date().getFullYear(),event.target.startMonth.value,event.target.startDay.value,parseInt(event.target.startTime.value.split(':')[0]), parseInt(event.target.startTime.value.split(':')[1])).toISOString()
                        let endDate = new Date(new Date().getFullYear(),event.target.endMonth.value,event.target.endDay.value,parseInt(event.target.endTime.value.split(':')[0]),parseInt(event.target.endTime.value.split(':')[1])).toISOString()
                        this.props.submitEvent({
                            id:this.props.id,
                            title: event.target.eventTitle.value,
                            location: event.target.eventLocation.value,
                            description: event.target.eventDescrip.value,
                            start_date_time: startDate,
                            end_date_time: endDate
                        })
                        this.props.history.push('/')
                    }}>
                
                    <div>
                        <label>Title</label>
                        <input type="text" name="eventTitle" defaultValue = {this.props.title}></input>
                    </div>
                    <div>
                        <label>Location</label>
                        <input type="text" name="eventLocation" defaultValue = {this.props.location}></input>
                    </div>
                    <div>
                        <label>Start</label>
                        <select name="startMonth">
                            {monthOption}
                        </select>
                        <select name="startDay">
                            {dayOption}
                        </select>
                        <select name="startTime">
                            <option value="12:00">12:00</option>
                            <option value="12:30">12:30</option>
                            <option value="1:00">1:00</option>
                            <option value="1:30">1:30</option>
                            <option value="2:00">2:00</option>
                            <option value="2:30">2:30</option>
                            <option value="3:00">3:00</option>
                            <option value="3:30">3:30</option>
                            <option value="4:00">4:00</option>
                            <option value="4:30">4:30</option>
                            <option value="5:00">5:00</option>
                            <option value="5:30">5:30</option>
                            <option value="6:00">6:00</option>
                            <option value="6:30">6:30</option>
                            <option value="7:00">7:00</option>
                            <option value="7:30">7:30</option>
                            <option value="8:00">8:00</option>
                            <option value="8:30">8:30</option>
                            <option value="9:00">9:00</option>
                            <option value="9:30">9:30</option>
                            <option value="10:00">10:00</option>
                            <option value="10:30">10:30</option>
                            <option value="11:00">11:00</option>
                            <option value="11:30">11:30</option>
                        </select>
                    </div>
                    <div>
                        <label>End</label>
                        <select name="endMonth">
                            {monthOption}
                        </select>
                        <select name="endDay">
                            {dayOption}
                        </select>
                        <select name="endTime">
                            <option value="12:00">12:00</option>
                            <option value="12:30">12:30</option>
                            <option value="1:00">1:00</option>
                            <option value="1:30">1:30</option>
                            <option value="2:00">2:00</option>
                            <option value="2:30">2:30</option>
                            <option value="3:00">3:00</option>
                            <option value="3:30">3:30</option>
                            <option value="4:00">4:00</option>
                            <option value="4:30">4:30</option>
                            <option value="5:00">5:00</option>
                            <option value="5:30">5:30</option>
                            <option value="6:00">6:00</option>
                            <option value="6:30">6:30</option>
                            <option value="7:00">7:00</option>
                            <option value="7:30">7:30</option>
                            <option value="8:00">8:00</option>
                            <option value="8:30">8:30</option>
                            <option value="9:00">9:00</option>
                            <option value="9:30">9:30</option>
                            <option value="10:00">10:00</option>
                            <option value="10:30">10:30</option>
                            <option value="11:00">11:00</option>
                            <option value="11:30">11:30</option>
                        </select>
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea name="eventDescrip" defaultValue = {this.props.description}></textarea>
                    </div>
                    <button type="submit">Create Event</button>
                </form>
            </div>
        )
    }
}

export default EventForm