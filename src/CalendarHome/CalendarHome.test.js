import React from 'react';
import ReactDOM from 'react-dom';
import CalendarHome from './CalendarHome';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CalendarHome />, div);
  ReactDOM.unmountComponentAtNode(div);
});