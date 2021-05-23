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
          "linear-gradient(213.47deg, #FDFAE5 10.99%, #E4F7FA 30.37%, #FBEDEB 46.18%, #F7F0FA 71.1%, #ECFBF3 86.93%);",
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
