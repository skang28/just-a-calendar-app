import React from 'react'
import './EventForm.css'
import moment from 'moment'

class EventForm extends React.Component {

    static defaultProps = {
        title: '',
        event_location: '',
        start_date_time: '',
        end_date_time: '',
        description: '',
      };

    state = {};

    formatMinutes(minutes) {
        minutes = minutes + ''
        if (minutes.length<2) {
            minutes = '0' + minutes
        }
        if (minutes < '30') {
            minutes = '00'
        }
        else {
            minutes = '30'
        }
        return minutes
    };
    
    render() {
        let numDays = moment().daysInMonth();

        let dayOption = [];
        for (let i=1 ; i<numDays+1; i++) {
            dayOption.push(<option value={i} key={"option" +i}>{i}</option>)
        };

        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let monthOption = months.map((month, index) => {
            return <option value={index} key={"option" +index}>{month}</option>
        });

        let times = [];
        for (let i=0; i<23.75; i+=0.5) {
            let hours = Math.floor(i)
            let minutes = (i - hours) * 60 + ''
            let amPm = 'am'
            minutes = this.formatMinutes(minutes)
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
        };

        let startTime = this.props.start_date_time;
        if (!this.props.start_date_time) {
            startTime = new Date();
            startTime.setHours(startTime.getHours() + 1);
            startTime = startTime.toISOString();
        };

        let endTime = this.props.end_date_time;
        if (!this.props.end_date_time) {
            endTime = new Date();
            endTime.setHours(endTime.getHours() + 2);
            endTime = endTime.toISOString();
        };

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
                        <select className="formSelect" name="startMonth" defaultValue = {new Date(startTime).getMonth()}>
                            {monthOption}
                        </select>
                        <select className="formSelect" name="startDay" defaultValue = {new Date(startTime).getDate()}>
                            {dayOption}
                        </select>
                        <select className="formSelect" name="startTime" defaultValue = {`${new Date(startTime).getHours()}:${this.formatMinutes(new Date(startTime).getMinutes())}`}>
                            {times}
                        </select>
                    </div>
                    <div>
                        <label className="endLabel">End</label>
                        <select className="formSelect" name="endMonth" defaultValue = {new Date(endTime).getMonth()}>
                            {monthOption}
                        </select>
                        <select className="formSelect" name="endDay" defaultValue = {new Date(endTime).getDate()}>
                            {dayOption}
                        </select>
                        <select className="formSelect" name="endTime" defaultValue = {`${new Date(endTime).getHours()}:${this.formatMinutes(new Date(endTime).getMinutes())}`}>
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