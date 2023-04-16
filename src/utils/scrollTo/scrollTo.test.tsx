import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import scrollTo from './scrollTo';
import { renderWith } from '@src/devUtils';

describe('scrollTo', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(cleanup);

  it('should scroll when a target is defined correctly', () => {
    Object.defineProperty(global, 'scrollTo', {
      value: jest.fn(() => {
        global.scrollY = 100;
      }),
      writable: true
    });
    renderWith(<div id="test" />);
    fireEvent.scroll(global.window, { target: { scrollY: 0 } });
    scrollTo({ elementId: 'test' });
    jest.runAllTimers();
    expect(global.scrollY).toBe(100);
    jest.clearAllTimers();
    jest.clearAllMocks();
  });

  it('should not scroll when the target is not defined correctly', () => {
    Object.defineProperty(global, 'scrollTo', {
      value: jest.fn(() => {
        global.scrollY = 100;
      }),
      writable: true
    });
    renderWith(<div id="test" />);
    fireEvent.scroll(global.window, { target: { scrollY: 0 } });
    scrollTo({ elementId: 'test2' });
    jest.runAllTimers();
    expect(global.scrollY).toBe(0);
    jest.clearAllTimers();
    jest.clearAllMocks();
  });
});
