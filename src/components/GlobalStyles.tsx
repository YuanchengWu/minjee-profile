import React from 'react'
import { Global, css } from '@emotion/react'

const globalStyles = css`
  :root {
    font-size: 62.5%;
  }

  html {
    font-family: -apple-system, Roboto, 'Segoe UI', Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
  }
`

export function GlobalStyles() {
  return (
    <>
      <Global styles={globalStyles} />
    </>
  )
}
