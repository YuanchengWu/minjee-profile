import { ThemeProvider } from "@emotion/react"
import styled from "@emotion/styled"

import { GlobalStyles } from "../components/GlobalStyles"
import { lightTheme } from "../theme"
import "../i18n"
import { useTranslation } from "react-i18next"
import { useState } from "react"

const Main = styled("main")(
  {
    height: "100vh",
    width: "100vw",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "0.2fr 1.8fr",
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

const Heading = styled("h1")(
  {
    fontFamily: "Roboto",
    fontWeight: 700,
    fontSize: "3.6rem",
    textAlign: "center",
    textTransform: "uppercase",
    gridArea: "header",
    alignSelf: "center",
  },
  ({ theme }) => ({
    color: theme.colors.gray2,
  })
)

function IndexPage(): JSX.Element {
  const { t } = useTranslation()

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Main>
        <Heading>{t("heading")}</Heading>
      </Main>
    </ThemeProvider>
  )
}

export default IndexPage
