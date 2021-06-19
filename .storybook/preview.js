import { ThemeProvider } from '@emotion/react'

import { GlobalStyles } from '../src/components/GlobalStyles'
import { lightTheme } from '../src/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      {
        name: 'Gradient',
        value: `linear-gradient(
          213.47deg,
          ${lightTheme.colors.yellow50} 10.99%, 
          ${lightTheme.colors.sky50} 30.37%, 
          ${lightTheme.colors.red50} 46.18%, 
          ${lightTheme.colors.purple50} 71.1%, 
          ${lightTheme.colors.lime50} 86.93%
        )`,
      },
    ],
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
]
