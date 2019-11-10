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
  Level,
  LevelItem,
  LevelHeading,
  LevelTitle,
  FieldInput,
  Label,
  Input
} from '../../../components'

const Landing = () => {
  return (
    <Section withPadding>
      <Container>
        <Panel withBorder title="Hello World">
          <Title color="primary">Hallo, Developer React Js</Title>
          <SubTitle>Landing Page</SubTitle>
          <Figure size="128x128">
            <Image isRounded src={logo} alt="logo react" />
          </Figure>
          <br />
          <FieldInput>
            <Label>Username</Label>
            <Input iconLeft="fas fa-user" iconRight="fas fa-check" />
          </FieldInput>
        </Panel>
        <Level>
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
        </Level>
      </Container>
    </Section>
  )
}

export default Landing
