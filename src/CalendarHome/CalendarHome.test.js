import React from 'react';
import ReactDOM from 'react-dom';
import CalendarHome from './CalendarHome';
import { BrowserRouter } from 'react-router-dom'



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <CalendarHome />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});