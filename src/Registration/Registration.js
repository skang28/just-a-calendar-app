import React from 'react';
import config from '../config';
import {Link} from 'react-router-dom';
import './Registration.css';

//renders page for creating a new account
class Registration extends React.Component {
    state = {
        error:''
    }
    render() {
        return(
            <div className="registrationPage">
                <nav className="loginNav">
                    <Link to={'/'} style={{ textDecoration: 'none' }} className="loginPageLink">Home</Link>
                    <Link to={'/login'} style={{ textDecoration: 'none'}} className="loginPageLink">Login</Link>
                </nav>
                <form className="registrationForm" onSubmit = {(event) => {
                    event.preventDefault()
                    fetch(`${config.API_ENDPOINT}/api/users`, {
                        method: 'POST',
                        body: JSON.stringify({
                            account_name: event.target.registrationName.value,
                            account_password: event.target.registrationPassword.value
                        }),
                        headers: {
                            'Content-type':'application/json'
                        }
                    })
                    .then(res => {
                        if (!res.ok) {
                            throw 'error'
                        }
                        else {
                            this.props.history.push('/login')
                        }
                    })
                    .catch (error => {
                        this.setState({
                            error: 'Uh oh! Something went wrong. Ensure your password is longer than 8 characters, and contains one upper case, lower case, number, and special character'
                        })
                    })

                
                }}>
                    <div className="formWrapper">
                        <div>
                            <label className="nameLabel">Account Name</label>
                            <input type="text" name="registrationName"></input>
                        </div>
                        <div>
                            <label className="passwordLabel">Password</label>
                            <input type="password" name="registrationPassword"></input>
                        </div>
                        <button type="submit" className="registrationButton">Create Account</button>
                        {this.state.error?<p>{this.state.error}</p>:''}
                    </div>
                </form>
            </div>
    
        )
    }
}

export default Registration