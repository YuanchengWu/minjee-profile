import React from 'react'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'
import { useTranslation } from 'react-i18next'
import '@fontsource/roboto/700.css'

import { ListTitle } from './ListTitle'
import { Card, CardVariant } from './Card'
import ProfilePic from '../images/linkedin-profile-edited.jpg'
import Samsung from '../images/samsung.svg'

const Heading = styled('h1')(
  {
    fontFamily: 'Roboto',
    fontWeight: 700,
    fontStyle: 'normal',
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
  margin: 'auto',

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
  const { colors } = useTheme()

  const iconCards = (
    nameSpace: 'boards.experience' | 'boards.projects' | 'boards.education',
    imageSources: string[]
  ): JSX.Element[] => {
    const labels = t(`${nameSpace}.cards`, { returnObjects: true })

    return labels.map((label, index) => (
      <Card
        variant={CardVariant.Icon}
        title={label.title}
        textContent={label.textContent}
        label={label.label}
        src={imageSources[index]}
        alt={label.alt}
        key={`${nameSpace}-${index}`}
      />
    ))
  }

  const iconsCards = (
    nameSpace: 'boards.skills',
    imagesSources: string[][]
  ): JSX.Element => {
    const labels = t(`${nameSpace}.cards`, { returnObjects: true })

    return labels.map((label, i) => (
      <Card
        variant={CardVariant.Icons}
        title={label.title}
        textContent={label.textContent}
        icons={imagesSources[i].map((imageSource, j) => ({
          src: imageSource,
          alt: label.alts[j],
        }))}
        key={`${nameSpace}-${i}`}
      />
    ))
  }

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
              title={t('boards.about.card.title')}
              textContent={t('boards.about.card.textContent')}
              src={ProfilePic}
              alt={t('boards.about.card.alt')}
            />
          </Board>
          <Board>
            <ListTitle backgroundColor={colors.lime500}>
              {t('boards.experience.title')}
            </ListTitle>
            {/* TODO: get images */}
            {iconCards('boards.experience', [Samsung])}
          </Board>
          <Board>
            <ListTitle backgroundColor={colors.yellow500}>
              {t('boards.projects.title')}
            </ListTitle>
            {/* TODO: get images */}
            {iconCards('boards.projects', [])}
          </Board>
          <Board>
            <ListTitle backgroundColor={colors.red500}>
              {t('boards.skills.title')}
            </ListTitle>
            {/* TODO: get images */}
            {iconsCards('boards.skills', [[], [], []])}
          </Board>
          <Board>
            <ListTitle backgroundColor={colors.purple500}>
              {t('boards.education.title')}
            </ListTitle>
            {iconCards('boards.education', [])}
          </Board>
        </BoardsContainer>
      </ScrollableContainer>
    </>
  )
}
