import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AuthApp from './AuthApp'


it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <AuthApp />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})