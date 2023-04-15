import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/themes/GlobalStyle';
import defaultTheme from '../src/themes/defaultTheme';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  )
];

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*'
  },
  backgrounds: {
    values: [
      { name: 'light', value: defaultTheme.colors.neutral.high.pure },
      { name: 'gray', value: defaultTheme.colors.neutral.low.dark }
    ],
    default: 'light'
  },
  options: {
    storySort: {
      order: ['Guidelines', ['ReadMe', 'Colors'], 'Components', '*']
    }
  }
};
