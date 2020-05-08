import React from 'react'
import config from '../config'

class Registration extends React.Component {
    state = {
        error:''
    }
    render() {
        return(
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
                <label>Account Name</label>
                <input type="text" name="registrationName"></input>
                <label>Password</label>
                <input type="text" name="registrationPassword"></input>
                <button type="submit">Create Account</button>
            {this.state.error?<p>{this.state.error}</p>:''}
            </form>
        )
    }
}

export default Registration