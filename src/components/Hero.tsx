import styled from '@emotion/styled'
import { useTranslation } from 'react-i18next'
import '@fontsource/roboto'
import '@fontsource/roboto/700.css'

import Samsung from '../images/samsung.svg'

const HeroContainer = styled('section')({
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto 6.4rem',
  alignItems: 'center',
})

const HeroTitle = styled('h1')(
  {
    fontFamily: 'Roboto',
    fontWeight: 700,
    fontStyle: 'normal',
    fontSize: '6.4rem',
    textAlign: 'center',
    marginBottom: '3.2rem',
    whiteSpace: 'pre-line',
  },
  ({ theme }) => ({
    color: theme.colors.gray1,
  })
)

const HeroSubtitle = styled('h2')(
  {
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '3.2rem',
    textAlign: 'center',
    maxWidth: '88rem',
  },
  ({ theme }) => ({
    color: theme.colors.gray2,
  })
)

const SiteLogo = styled('img')({
  position: 'absolute',
  top: '5.6rem',
  left: '5.6rem',
  borderRadius: '50%',
  width: '8rem',
})

export function Hero(): JSX.Element {
  const { t } = useTranslation()

  return (
    <HeroContainer>
      <SiteLogo src={Samsung} />
      <HeroTitle>{t('hero.title')}</HeroTitle>
      <HeroSubtitle>{t('hero.subtitle')}</HeroSubtitle>
    </HeroContainer>
  )
}
