import React from 'react'
import logo from '../../../logo.svg'
import {
  Section,
  Container,
  Title,
  SubTitle,
  Image,
  Panel,
  Figure,
  Levels,
  LevelItem,
  LevelHeading,
  LevelTitle,
} from '../../../components'

const Landing = () => {
  return (
    <Section>
      <Container>
        <Panel withBorder title="Hello World">
          <Title color="primary">Hallo, Developer React Js</Title>
          <SubTitle>Landing Page</SubTitle>
          <Figure size="128x128">
            <Image rounded src={logo} alt="logo react" />
          </Figure>
        </Panel>

        <Levels>
          <LevelItem tag="p">
            <div>
              <LevelHeading>Team</LevelHeading>
              <LevelTitle>10</LevelTitle>
            </div>
          </LevelItem>
          <LevelItem>
            <div>
              <LevelHeading>Following</LevelHeading>
              <LevelTitle>2000</LevelTitle>
            </div>
          </LevelItem>
          <LevelItem>
            <div>
              <LevelHeading>Batch</LevelHeading>
              <LevelTitle>4</LevelTitle>
            </div>
          </LevelItem>
        </Levels>
      </Container>
    </Section>
  )
}

export default Landing
