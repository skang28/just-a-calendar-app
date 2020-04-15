import React from 'react'
import './NavBar.css'

class NavBar extends React.Component {
    render() {
        return(
            <section className="navbar">
                <div className="viewSelect">
                    <select onChange = {(e) => {
                        this.props.setViewType(e.target.value)
                    }}>
                        <option value="weekly">Weekly</option>
                        <option value="daily">Daily</option>
                        <option value="monthly" selected>Monthly</option>
                    </select>
                </div>
                <div className="title">
                    Just a Calendar
                </div>
                <div className="settings">
                    <button className="settingsButton">Settings</button>
                </div>
            </section>
        )
    }
}

export default NavBar