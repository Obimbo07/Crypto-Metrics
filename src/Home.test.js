import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home/Home';
import store from './redux/store';

test('renders Home component correctly', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
