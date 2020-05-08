import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'

class NavBar extends React.Component {
    render() {
        return(
            <section className="navbar">
                <div className="viewSelect">
                    <select className="selectBox" onChange = {(e) => {
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
                <div className="navLinks">
                    <Link to = {'/login'} style={{textDecoration: 'none'}} className="loginLink">Login</Link>
                    <Link to = {'/registration'} style={{textDecoration: 'none'}} className="regLink">Register</Link>
                </div>
            </section>
        )
    }
}

export default NavBar