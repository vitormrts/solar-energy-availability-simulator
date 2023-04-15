import React from 'react';
import { render, type RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { type RenderWithSettings } from './renderWith.types';
import defaultTheme from '@src/themes/defaultTheme';

const withTheme = (children: React.ReactNode): React.ReactNode => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

const renderWith = (
  children: React.ReactNode,
  settings: RenderWithSettings = { theme: true }
): RenderResult => {
  const themed = settings.theme ? withTheme(children) : children;
  return render(<>{themed}</>);
};

export default renderWith;
