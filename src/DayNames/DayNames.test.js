import React from 'react';
import ReactDOM from 'react-dom';
import DayNames from './DayNames';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DayNames />, div);
  ReactDOM.unmountComponentAtNode(div);
});