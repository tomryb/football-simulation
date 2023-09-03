/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
import { useAppContext } from '../../context/AppContext';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../context/AppContext.tsx', () => ({
  useAppContext: () => ({
    isRunning: false,
    startMatch: jest.fn(),
    stopMatch: jest.fn(),
    resetMatch: jest.fn(),
  }),
}));

describe('Button Component', () => {
  it('renders Button component with Start button', async () => {
    const {getByText} = await render(<Button />);
    const startButtonElement = getByText('Start');
    expect(startButtonElement).toBeInTheDocument();
  });

  it('calls startMatch function when Start button is clicked', async () => {
    const {getByText} = await render(<Button />);

    const startButtonElement = getByText('Start');
    fireEvent.click(startButtonElement);

    expect(useAppContext().startMatch).toHaveBeenCalled();
  });

  it('renders Reset button when isRunning is false', async () => {
    const {getByText} = await render(<Button />);

    const startButtonElement = getByText('Start');
    fireEvent.click(startButtonElement);

    const resetButtonElement = getByText('Reset');
    expect(resetButtonElement).toBeInTheDocument();
  });

  it('calls resetMatch function when Reset button is clicked', async () => {
    const {getByText} = await render(<Button />);

    const startButtonElement = getByText('Start');
    fireEvent.click(startButtonElement);

    const resetButtonElement = getByText('Reset');
    fireEvent.click(resetButtonElement);

    expect(useAppContext().resetMatch).toHaveBeenCalled();
  });

  it('renders Finish button when isRunning is true', async () => {
    const {getByText} = await render(<Button />);

    const startButtonElement = getByText('Start');
    fireEvent.click(startButtonElement);

    const finishButtonElement = getByText('Finish');
    expect(finishButtonElement).toBeInTheDocument();
  });

  it('calls stopMatch function when Finish button is clicked', async () => {
   const {getByText} = await render(<Button />);

    const startButtonElement = getByText('Start');
    fireEvent.click(startButtonElement);

    const finishButtonElement = getByText('Finish');
    fireEvent.click(finishButtonElement);

    expect(useAppContext().stopMatch).toHaveBeenCalled();
  });
});
