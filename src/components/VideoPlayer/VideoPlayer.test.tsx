import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import VideoPlayer from './VideoPlayer';

describe('<VideoPlayer />', () => {
  test('it should mount', () => {
    render(<VideoPlayer />);
    
    const videoPlayer = screen.getByTestId('VideoPlayer');

    expect(videoPlayer).toBeInTheDocument();
  });
});