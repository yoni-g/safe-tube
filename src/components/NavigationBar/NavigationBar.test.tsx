import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavigationBar from './NavigationBar';

describe('<NavigationBar />', () => {
  test('it should mount', () => {
    render(<NavigationBar />);
    
    const navigationBar = screen.getByTestId('NavigationBar');

    expect(navigationBar).toBeInTheDocument();
  });
});