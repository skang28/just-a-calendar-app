import React from 'react'
import './EventForm.css'
import moment from 'moment'

class EventForm extends React.Component {

    static defaultProps = {
        title: '',
        event_location: '',
        start_date_time: '2020-04-15T21:27:36.311Z',
        end_date_time: '2020-04-16T21:27:36.311Z',
        description: '',
      };

    state = {};

    render() {

        let numDays = moment().daysInMonth()

        let dayOption = []
        for (let i=1 ; i<numDays+1; i++) {
            dayOption.push(<option value={i} key={"option" +i}>{i}</option>)
        }

        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        let monthOption = months.map((month, index) => {
            return <option value={index} key={"option" +index}>{month}</option>
        })

        let times = []
        for (let i=0; i<23.75; i+=0.5) {
            let hours = Math.floor(i)
            let minutes = (i - hours) * 60 + ''
            let amPm = 'am'
            if (minutes.length<2) {
                minutes = '0' + minutes
            }
            if (hours > 11) {
                hours = hours - 12
                amPm = 'pm'
            }
            if (hours === 0) {
                hours = 12
            }
            times.push(
                <option value = {`${Math.floor(i)}:${minutes}`} key={"option"+i}>{hours}:{minutes} {amPm}</option>
            )
        }

        return(
            <div className="addEditEvent">
                <header className="formHeader">
                    <h2>Add/Edit Event</h2>
                </header>
                <form className="eventform" 
                    onSubmit = { async (event) => {
                        event.preventDefault()
                        let startDate = new Date(new Date().getFullYear(),event.target.startMonth.value,event.target.startDay.value,parseInt(event.target.startTime.value.split(':')[0]), parseInt(event.target.startTime.value.split(':')[1])).toISOString();
                        let endDate = new Date(new Date().getFullYear(),event.target.endMonth.value,event.target.endDay.value,parseInt(event.target.endTime.value.split(':')[0]),parseInt(event.target.endTime.value.split(':')[1])).toISOString();
                        let res = this.props.submitEvent({
                            id:this.props.id,
                            title: event.target.eventTitle.value,
                            location: event.target.eventLocation.value,
                            description: event.target.eventDescrip.value,
                            start_date_time: startDate,
                            end_date_time: endDate
                        })
                        res
                            .then(() => {
                                this.props.history.push('/home');
                            })
                            .catch((err) => {
                                err.json().then((err) => {
                                    this.setState({ error: err.error.message });
                                });
                            });
                }}>
                    {this.state.error?this.state.error:''}
                    <div>
                        <label className="titleLabel">Title</label>
                        <input type="text" name="eventTitle" defaultValue = {this.props.title} required></input>
                    </div>
                    <div>
                        <label className="locLabel">Location</label>
                        <input type="text" name="eventLocation" defaultValue = {this.props.event_location}></input>
                    </div>
                    <div>
                        <label className="startLabel">Start</label>
                        <select name="startMonth">
                            {monthOption}
                        </select>
                        <select name="startDay">
                            {dayOption}
                        </select>
                        <select name="startTime">
                            {times}
                        </select>
                    </div>
                    <div>
                        <label className="endLabel">End</label>
                        <select name="endMonth">
                            {monthOption}
                        </select>
                        <select name="endDay">
                            {dayOption}
                        </select>
                        <select name="endTime">
                            {times}
                        </select>
                    </div>
                    <div>
                        <label className="descripLabel">Description</label>
                        <textarea name="eventDescrip" defaultValue = {this.props.description} required></textarea>
                    </div>
                    <button type="submit" className="formButton">Create Event</button>
                </form>
            </div>
        )
    }
}

export default EventForm