import React, { useContext } from 'react'
import styled from '@emotion/styled'
import { ThemeContext } from '@emotion/react'
import { useTranslation } from 'react-i18next'

import { ListTitle } from './ListTitle'
import { Card, CardVariant } from './Card'
import ProfilePic from '../images/linkedin-profile-edited.jpg'
import Samsung from '../images/samsung.svg'

const Heading = styled('h1')(
  {
    fontFamily: 'Roboto',
    fontWeight: 700,
    fontSize: '3.6rem',
    textAlign: 'center',
    textTransform: 'uppercase',
    gridArea: 'header',
    alignSelf: 'center',
  },
  ({ theme }) => ({
    color: theme.colors.gray2,
  })
)

const ScrollableContainer = styled('div')({
  overflow: 'auto',
})

const BoardsContainer = styled('section')({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, min-content)',
  columnGap: '2.4rem',
  justifyContent: 'center',
  width: 'fit-content',

  '> :first-of-type': {
    marginLeft: '2.4rem',
  },

  '> :last-of-type': {
    marginRight: '2.4rem',
  },
})

const Board = styled('div')({
  width: '26rem',
  display: 'flex',
  flexDirection: 'column',

  '> :not(card:last-of-type)': {
    marginBottom: '1.6rem',
  },
})

export function IndexContent() {
  const { t } = useTranslation()
  const { colors } = useContext(ThemeContext)

  const iconCards = (
    nameSpace: string,
    imageSources: string[]
  ): JSX.Element[] =>
    imageSources.map((imgSrc, index) => (
      <Card
        variant={CardVariant.Icon}
        title={t(`${nameSpace}.card${index + 1}.title`)}
        textContent={t(`${nameSpace}.card${index + 1}.textContent`)}
        label={t(`${nameSpace}.card${index + 1}.label`)}
        src={imgSrc}
        alt={t(`${nameSpace}.card${index + 1}.imgAlt`)}
      />
    ))

  return (
    <>
      <Heading>{t('heading')}</Heading>
      <ScrollableContainer>
        <BoardsContainer>
          <Board>
            <ListTitle backgroundColor={colors.sky500}>
              {t('boards.about.title')}
            </ListTitle>
            <Card
              variant={CardVariant.Image}
              title={t('boards.about.card1.title')}
              textContent={t('boards.about.card1.textContent')}
              src={ProfilePic}
              alt={t('boards.about.card1.imgAlt')}
            />
          </Board>
          <Board>
            <ListTitle backgroundColor={colors.lime500}>
              {t('boards.experience.title')}
            </ListTitle>
            {/* TODO: get images */}
            {iconCards('boards.experience', [Samsung, '', ''])}
          </Board>
          <Board>
            <ListTitle backgroundColor={colors.yellow500}>
              {t('boards.projects.title')}
            </ListTitle>
            {/* TODO: get images */}
            {iconCards('boards.projects', ['', '', ''])}
          </Board>
          <Board />
          <Board />
        </BoardsContainer>
      </ScrollableContainer>
    </>
  )
}
