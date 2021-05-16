import { ThemeProvider } from "@emotion/react"
import { GlobalStyles } from "../src/components/GlobalStyles"

import { lightTheme } from "../src/theme"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      {
        name: "Gradient",
        value:
          "linear-gradient(213.47deg, #FFF8EA 10.99%, #E7F9F5 30.37%, #FEE7E4 46.18%, #F5EEF7 71.1%, #F5FAED 86.93%);",
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
