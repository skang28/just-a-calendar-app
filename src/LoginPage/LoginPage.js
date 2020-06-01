import React from 'react'
import config from '../config'
import {Link} from 'react-router-dom'
import './LoginPage.css'

//page for user to log into account
class LoginPage extends React.Component {
    state = {
        error: ''
    }
    render() {
        return(
            <div className="loginWrapper">
                <nav className="loginNav">
                    <Link to = {'/'} style={{textDecoration: 'none'}} className="loginPageLink">Home</Link>
                    <Link to = {'/registration'} style={{textDecoration: 'none'}} className="loginPageLink" >Create Account</Link>
                </nav>
                <form className="loginForm" onSubmit = {(event) => {
                    event.preventDefault()
                    fetch(`${config.API_ENDPOINT}/api/auth/login`, {
                        method: 'POST',
                        body: JSON.stringify({
                            account_name: event.target.accountName.value,
                            account_password: event.target.accountPassword.value
                        }),
                        headers: {
                            'Content-type': 'application/json'
                        }
                    })
                    .then(res => {
                        if (!res.ok) {
                            throw 'error'
                        }
                        return res.json()
                    })
                    .then(authRes => {
                        localStorage.setItem('token', authRes.authToken)
                        this.props.history.push('/home')
                    })
                    .catch(error => {
                        this.setState({
                            error: 'Uh oh! Something went wrong. Ensure your user name and password are correct!'
                        })
                    })
                    
                }}>
                    <div className="formWrapper">
                        <div>
                            <label className="nameLabel">Account Name</label>
                            <input type="text" name="accountName"></input>
                        </div>
                        <div>
                            <label className="passwordLabel">Password</label>
                            <input type="password" name="accountPassword"></input>
                        </div>
                        <button type="submit" className="loginPageButton">Login</button>
                    </div>
                {this.state.error?<p>{this.state.error}</p>:''}
                </form>
            </div>
        )
    }
}

export default LoginPage