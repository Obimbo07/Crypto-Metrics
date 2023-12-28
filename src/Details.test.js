import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Details from './components/Details';
import store from './redux/store';

test('renders Details component correctly', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Router>
        <Details />
      </Router>
    </Provider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
