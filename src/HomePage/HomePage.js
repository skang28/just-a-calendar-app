import React from 'react'

class HomePage extends React.Component {
    render() {
        return(
          <div className="homePage">
            <header className="homePageHeader">
              <h1>Just a Calendar</h1>
              <h2>Simple, Clean, Only What You Need.</h2>
            </header>
            <main className="homePageMain">
              <div className="textWrapper">
                <p>
                  Keep it simple! Just a Calendar bases itself off the idea that less is more. Most calendar apps are filled with a numerous amount of extra options and features that can overpower a user's focus. This app aims to take that all away and give the user the essentials!
                </p>
                <p>The user registers or logs in to the app, and will see the calendar unique to the user account. The user creates, edits, or deletes events.</p>
              </div>
              <button className="homeButton" onClick = {() => this.props.history.push('/home')}>Explore</button>
            </main>
          </div>
        )
    }
}

export default HomePage