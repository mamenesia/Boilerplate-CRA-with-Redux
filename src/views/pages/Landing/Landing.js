import React from 'react'
import logo from '../../../logo.svg'
import {
  Section,
  Container,
  Title,
  SubTitle,
  Image,
  Panel,
  Figure
} from '../../../components'

const Landing = () => {
  return (
    <Section withPadding>
      <Container>
        <Panel withBorder title="Hello World">
          <Title>Hallo, Developer React Js</Title>
          <SubTitle>Landing Page</SubTitle>
          <Figure size="128x128">
            <Image isRounded src={logo} alt="logo react" />
          </Figure>
        </Panel>
      </Container>
    </Section>
  )
}

export default Landing
