import React from 'react'
import config from '../config'
import {Link} from 'react-router-dom'

class LoginPage extends React.Component {
    state = {
        error: ''
    }
    render() {
        return(
            <div className="loginWrapper">
                <nav>
                    <Link to = {'/registration'}>Register Account</Link>
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
                        this.props.history.push('/')
                    })
                    .catch(error => {
                        this.setState({
                            error: 'Uh oh! Something went wrong. Ensure your user name and password are correct!'
                        })
                    })
                    
                }}>
                    <label>Account Name</label>
                    <input type="text" name="accountName"></input>
                    <label>Password</label>
                    <input type="text" name="accountPassword"></input>
                    <button type="submit">Login</button>
                {this.state.error?<p>{this.state.error}</p>:''}
                </form>
            </div>
        )
    }
}

export default LoginPage