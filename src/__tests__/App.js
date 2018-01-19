import React from 'react';
import { render, shallow } from 'enzyme';
import App from '../components/App';

test('renders the app', () => {
  render(<App />);
});
