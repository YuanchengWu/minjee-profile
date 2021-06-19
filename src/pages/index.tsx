import { ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'

import { GlobalStyles } from '../components/GlobalStyles'
import { lightTheme } from '../theme'
import '../i18n'
import { Suspense } from 'react'
import { IndexContent } from '../components/IndexContent'

const Main = styled('main')(
  {
    height: '100vh',
    width: '100vw',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '0.2fr 1.8fr',
    gridTemplateAreas: `
      "header"
      "boards"
    `,
  },
  ({ theme }) => ({
    background: `linear-gradient(
    213.47deg,
    ${theme.colors.yellow50} 10.99%, 
    ${theme.colors.sky50} 30.37%, 
    ${theme.colors.red50} 46.18%, 
    ${theme.colors.purple50} 71.1%, 
    ${theme.colors.lime50} 86.93%
  )`,
  })
)

function IndexPage(): JSX.Element {
  return (
    <Suspense fallback="loading...">
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <Main>
          <IndexContent />
        </Main>
      </ThemeProvider>
    </Suspense>
  )
}

export default IndexPage
