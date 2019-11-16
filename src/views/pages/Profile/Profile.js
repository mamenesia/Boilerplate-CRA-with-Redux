import React from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Section, Container, Title, SubTitle } from '../../../components'
import { userData } from '../../../helper'

const Profile = props => {
  const { auth } = props
  if (!auth) return <Redirect to="/" />

  return (
    <Section>
      <Container>
        <Title>Hallo, Developer React Js</Title>
        <SubTitle>
          Profile,&nbps;
          {userData().fullName}
        </SubTitle>
      </Container>
    </Section>
  )
}

Profile.propTypes = {
  auth: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth.authenticated,
})

export default connect(mapStateToProps)(Profile)
