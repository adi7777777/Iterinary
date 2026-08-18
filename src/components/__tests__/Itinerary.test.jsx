import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material';
import theme from '../../theme/theme';
import Itinerary from '../Itinerary';

// mock useNavigate
jest.mock('react-router-dom', () => ({ useNavigate: () => jest.fn() }));

const trip = {
  place: 'Goa',
  start: '2026-08-18',
  end: '2026-08-20',
  stay: 'Hotel',
  budget: 3000,
  travel: 'Car',
  activities: 'Sightseeing'
};

test('Itinerary shows correct number of days based on dates', () => {
  render(
    <ThemeProvider theme={theme}>
      <Itinerary trip={trip} currentPage={1} />
    </ThemeProvider>
  );

  // Day labels should be present for 3 days (inclusive)
  expect(screen.getByText('Day 1')).toBeInTheDocument();
  expect(screen.getByText('Day 2')).toBeInTheDocument();
  expect(screen.getByText('Day 3')).toBeInTheDocument();
});
