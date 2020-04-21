import React from 'react';
import ReactDOM from 'react-dom';
import DailyView from './DailyView';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DailyView />, div);
  ReactDOM.unmountComponentAtNode(div);
});