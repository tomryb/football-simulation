import React from 'react';
import { render, screen } from '@testing-library/react';
import TotalGoals from './TotalGoals';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../context/AppContext', () => ({
  useAppContext: () => ({
    score: { teamA: 2, teamB: 3, teamC: 1 },
  }),
}));

test('TotalGoals displays the correct total goals', () => {
  render(<TotalGoals />);

  const totalGoalsElement = screen.getByText('Total Goals');
  const totalGoalsValue = screen.getByText('6');

  expect(totalGoalsElement).toBeInTheDocument();
  expect(totalGoalsValue).toBeInTheDocument();
});
