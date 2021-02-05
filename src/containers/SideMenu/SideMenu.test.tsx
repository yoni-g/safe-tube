import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SideMenu from './SideMenu';

describe('<SideMenu />', () => {
  test('it should mount', () => {
    render(<SideMenu />);
    
    const sideMenu = screen.getByTestId('SideMenu');

    expect(sideMenu).toBeInTheDocument();
  });
});