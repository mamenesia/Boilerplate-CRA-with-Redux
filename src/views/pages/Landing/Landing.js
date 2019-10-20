import React from 'react'
import logo from '../../../logo.svg'
import { Section, Container, Title, SubTitle, Image } from '../../../components'

const Landing = () => {
  return (
    <Section withPadding>
      <Container>
        <Title>Hallo, Developer React Js</Title>
        <SubTitle>Landing Page</SubTitle>
        <Image src={logo} width="20%" alt="logo react" />
      </Container>
    </Section>
  )
}

export default Landing
