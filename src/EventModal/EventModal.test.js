import React from 'react';
import ReactDOM from 'react-dom';
import EventModal from './EventModal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EventModal />, div);
  ReactDOM.unmountComponentAtNode(div);
});