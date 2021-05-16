import { useTheme, Theme } from "@emotion/react"
import styled from "@emotion/styled"

export interface CardProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  title: string
}

const Background = styled("article")<{ colors: Theme["colors"] }>(
  {
    borderRadius: 20,
  },
  ({ colors }) => ({
    backgroundColor: colors.white,
  })
)

const CardTitle = styled("h2")`
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
`

export function Card({ title, ...imgProps }: CardProps): JSX.Element {
  const theme = useTheme()
  return (
    <Background colors={theme.colors}>
      <CardTitle>{title}</CardTitle>
      <img {...imgProps} />
    </Background>
  )
}
