import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Search from './components/Home/Search';

test('renders Search component correctly', () => {
  const setSearchQueryMock = jest.fn();
  const { getByPlaceholderText } = render(
    <Search setSearchQuery={setSearchQueryMock} />,
  );

  const searchInput = getByPlaceholderText('Search by name');

  // Simulate user typing in the search input
  fireEvent.change(searchInput, { target: { value: 'Bitcoin' } });

  // Ensure that the setSearchQuery function is called with the correct value
  expect(setSearchQueryMock).toHaveBeenCalledWith('Bitcoin');
});
