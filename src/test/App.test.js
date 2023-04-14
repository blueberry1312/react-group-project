import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  test('renders header', () => {
    render(<App />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  test('renders rockets component by default', () => {
    const { getByRole } = render(<App />);
    expect(getByRole('heading', { name: /Rockets/i })).toBeInTheDocument();
  });

  test('renders rockets component when navigating to /rockets', () => {
    window.history.pushState({}, '', '/rockets');
    const { getByRole } = render(<App />);
    expect(getByRole('heading', { name: /Rockets/i })).toBeInTheDocument();
  });

  test('renders my profile component when navigating to /my-profile', () => {
    window.history.pushState({}, '', '/my-profile');
    const { getByRole } = render(<App />);
    expect(getByRole('heading', { name: /My Missions/i })).toBeInTheDocument();
    expect(getByRole('heading', { name: /My Rockets/i })).toBeInTheDocument();
  });
});
