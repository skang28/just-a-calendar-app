import React from 'react';
import ReactDOM from 'react-dom';
import WeeklyView from './WeeklyView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeeklyView />, div);
  ReactDOM.unmountComponentAtNode(div);
});