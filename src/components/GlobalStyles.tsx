import { Global, css } from "@emotion/react"

const globalStyles = css`
  body {
    font-family: -apple-system, Roboto, "Segoe UI", Oxygen, Ubuntu, Cantarell,
      "Open Sans", "Helvetica Neue", sans-serif;
  }
`

export function GlobalStyles() {
  return (
    <>
      <Global styles={globalStyles} />
    </>
  )
}
