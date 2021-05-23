import { ImgHTMLAttributes } from "react"
import styled from "@emotion/styled"

export enum CardVariant {
  Icon = "icon",
  Icons = "icons",
  Image = "image",
}

export interface CardProps extends ImgHTMLAttributes<HTMLImageElement> {
  /**
   * The variant of the Card.
   * @default CardVariant.Icon
   */
  variant?: CardVariant

  /**
   * The card's title text content.
   */
  title: string

  /**
   * The card's inner text content.
   */
  textContent: string

  /**
   * The card's label text content. Hidden if not provided.
   */
  label?: string

  icons?: ImgHTMLAttributes<HTMLImageElement>[]
}

const Background = styled("article")<Pick<CardProps, "variant">>(
  {
    display: "flex",
    flexDirection: "column",
    alignContent: "space-between",
    borderRadius: "2.0rem",
    padding: "1.8rem",
    overflow: "hidden",
  },
  ({ theme }) => ({
    backgroundColor: theme.colors.white,
  }),
  ({ variant }) => {
    switch (variant) {
      case CardVariant.Icon:
        return {
          textAlign: "left",
        }
      case CardVariant.Image:
        return {
          textAlign: "center",
        }
    }
  }
)

const Title = styled("h2")(
  {
    fontFamily: "Roboto",
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginBottom: "0.8rem",
  },
  ({ theme }) => ({
    color: theme.colors.gray1,
  })
)

const TextContent = styled("p")(
  {
    fontFamily: "Roboto",
    fontSize: "1.4rem",
    flex: "1",
    marginBottom: "0.8rem",
  },
  ({ theme }) => ({
    color: theme.colors.gray2,
  })
)

const Label = styled("p")(
  {
    borderRadius: "1rem",
    fontFamily: "Source Sans Pro",
    fontWeight: 600,
    fontSize: "1rem",
    letterSpacing: "0.1rem",
    lineHeight: "1.6rem",
    padding: "0.3rem 0.8rem",
    width: "fit-content",
    textTransform: "uppercase",
    alignSelf: "flex-end",
  },
  ({ theme }) => ({
    backgroundColor: theme.colors.gray5,
    color: theme.colors.gray2,
  })
)

const ContentContainer = styled("div")({
  display: "flex",
  alignContent: "flex-end",
  flexWrap: "wrap",
})

const Image = styled("img")({
  borderRadius: "2.0rem",
  maxWidth: "100%",
  maxHeight: "100%",
  marginTop: "0.8rem",
})

const Icon = styled("img")<Pick<CardProps, "variant">>(
  {
    borderRadius: "50%",
    width: "4.8rem",
  },
  ({ variant }) => {
    switch (variant) {
      case CardVariant.Icon:
        return {
          marginLeft: "auto",
        }
      case CardVariant.Icons:
        return {
          marginTop: "0.8rem",
          marginRight: "auto",
        }
    }
  }
)

export function Card({
  variant = CardVariant.Icon,
  title,
  textContent,
  label,
  icons,
  ...imgProps
}: CardProps): JSX.Element {
  return (
    <Background variant={variant}>
      <Title>{title}</Title>
      <TextContent>{textContent}</TextContent>
      {variant === CardVariant.Image && <Image {...imgProps} />}
      {variant === CardVariant.Icon && (
        <ContentContainer>
          {label && <Label>{label}</Label>}
          <Icon variant={variant} {...imgProps} />
        </ContentContainer>
      )}
      {variant === CardVariant.Icons && (
        <ContentContainer>
          {label && <Label>{label}</Label>}
          {icons && icons.map((icon) => <Icon variant={variant} {...icon} />)}
        </ContentContainer>
      )}
    </Background>
  )
}
