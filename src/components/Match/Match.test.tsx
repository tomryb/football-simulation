import React from 'react';
import { render, screen } from '@testing-library/react';
import { useAppContext } from '../../context/AppContext';
import Match from './Match';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../context/AppContext', () => ({
  useAppContext: () => ({
    isRunning: false,
    time: 0,
    stopMatch: jest.fn(),
    updateScore: jest.fn(),
    updateTime: jest.fn(),
  }),
}));

describe('Match Component', () => {
  it('renders match component with initial score', () => {
    render(<Match name="Match Name" />);
    const matchNameElement = screen.getByText('Match Name');
    const scoreElement = screen.getByText('Score: 0 - 0');
    expect(matchNameElement).toBeInTheDocument();
    expect(scoreElement).toBeInTheDocument();
  });

  it('updates score when time is a multiple of 10', () => {
    const { rerender } = render(<Match name="Match Name" />);
    const scoreElement = screen.getByText('Score: 0 - 0');

    rerender(<Match name="Match Name" />);

    expect(scoreElement).toHaveTextContent('Score:');

    expect(useAppContext().updateScore).toHaveBeenCalledWith('teamA');
  });

});
