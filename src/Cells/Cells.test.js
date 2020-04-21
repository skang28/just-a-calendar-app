import React from 'react';
import ReactDOM from 'react-dom';
import Cells from './Cells';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cells />, div);
  ReactDOM.unmountComponentAtNode(div);
});