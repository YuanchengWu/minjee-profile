import styled from "@emotion/styled"

export type ListTitleProps = {
  /**
   * The title text.
   */
  title: string

  /**
   * The background color.
   */
  backgroundColor: string
}

const Background = styled("div")<Pick<ListTitleProps, "backgroundColor">>(
  {
    borderRadius: "1.6rem",
    padding: "1.2rem 1.6rem",
  },
  ({ backgroundColor }) => ({
    backgroundColor,
  })
)

const Title = styled("h2")(
  {
    fontFamily: "Roboto",
    fontWeight: 700,
    fontSize: "2rem",
    lineHeight: "2.3rem",
    textAlign: "center",
    textTransform: "uppercase",
  },
  ({ theme }) => ({
    color: theme.colors.white,
  })
)

export function ListTitle({
  title,
  backgroundColor,
}: ListTitleProps): JSX.Element {
  return (
    <Background backgroundColor={backgroundColor}>
      <Title>{title}</Title>
    </Background>
  )
}
