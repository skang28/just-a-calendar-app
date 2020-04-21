import React from 'react';
import ReactDOM from 'react-dom';
import MonthlyView from './MonthlyView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MonthlyView />, div);
  ReactDOM.unmountComponentAtNode(div);
});