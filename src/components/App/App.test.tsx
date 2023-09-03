import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../context/AppContext', () => ({
  useAppContext: () => ({
    time: 0,
  }),
}));

describe('App Component', () => {
  it('renders App component with time', () => {
    render(<App />);
    const titleElement = screen.getByText('Katar 2023');
    const timeElement = screen.getByText('Time: 0 seconds');
    const buttonElement = screen.getByText('Start');

    expect(titleElement).toBeInTheDocument();
    expect(timeElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
});
