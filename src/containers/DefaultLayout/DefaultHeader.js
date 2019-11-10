/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Formik, Form, Field } from 'formik'
import classNames from 'classnames'
import * as Yup from 'yup'
import { FormikInput } from '../../helper/Form'
import { signIn, signOut } from '../../modules/auth/actions'
import styles from './layout.module.css'
import { userData } from '../../helper/Common'

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email tidak valid')
    .required('email belum diisi'),
  password: Yup.string().required('password belum diisi')
})

class DefaultHeader extends Component {
  state = {
    isModalLogin: false,
    isActive: false
  }

  initialValues = {
    email: '',
    password: ''
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  toggleModalLogin = () => {
    const { isModalLogin } = this.state
    this.setState({
      isModalLogin: !isModalLogin
    })
  }

  handleLogin = values => {
    const { signIn } = this.props
    signIn(values)
  }

  render() {
    const { isModalLogin, isActive } = this.state
    const { auth, authError, signOut } = this.props

    // custom modal login
    let cssModalLogin = styles.modal
    if (isModalLogin) cssModalLogin += ` ${styles['is-active']}`

    // custom burger menu
    let cssBurgerMenu = `${styles['navbar-burger']} ${styles.burger}`
    if (isActive) cssBurgerMenu += ` ${styles['is-active']}`

    // custom navbar menu
    let cssNavbarMenu = styles['navbar-menu']
    if (isActive) cssNavbarMenu += ` ${styles['is-active']}`

    return (
      <>
        <nav
          className={classNames(styles.navbar)}
          role="navigation"
          aria-label="main navigation"
        >
          <div className={classNames(styles.container)}>
            <div className={classNames(styles['navbar-brand'])}>
              <a className={classNames(styles['navbar-item'])} href="/">
                <img
                  src="https://bulma.io/images/bulma-logo.png"
                  width="112"
                  height="28"
                  alt="logo"
                />
              </a>

              <span
                role="button"
                className={cssBurgerMenu}
                onClick={this.toggleNav}
                onKeyPress={this.toggleNav}
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarToggle"
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </span>
            </div>

            <div id="navbarToggle" className={cssNavbarMenu}>
              <div className={classNames(styles['navbar-start'])}>
                <a href="/" className={classNames(styles['navbar-item'])}>
                  Home
                </a>
                <Link to="/" className={classNames(styles['navbar-item'])}>
                  Documentation
                </Link>
                <div
                  className={classNames(
                    styles['navbar-item'],
                    styles['has-dropdown'],
                    styles['is-hoverable']
                  )}
                >
                  <span className={classNames(styles['navbar-link'])}>
                    More
                  </span>

                  <div className={classNames(styles['navbar-dropdown'])}>
                    <Link to="/" className={classNames(styles['navbar-item'])}>
                      About
                    </Link>
                    <Link to="/" className={classNames(styles['navbar-item'])}>
                      Jobs
                    </Link>
                    <Link to="/" className={classNames(styles['navbar-item'])}>
                      Contact
                    </Link>
                    <hr className={classNames(styles['navbar-divider'])} />
                    <Link to="/" className={classNames(styles['navbar-item'])}>
                      Report an issue
                    </Link>
                  </div>
                </div>
              </div>

              <div className={classNames(styles['navbar-end'])}>
                {!auth ? (
                  <div className={classNames(styles['navbar-item'])}>
                    <div className={classNames(styles.buttons)}>
                      <Link
                        to="/join/signup"
                        className={classNames(styles.button, styles['is-info'])}
                      >
                        <strong>Sign up</strong>
                      </Link>
                      <button
                        type="button"
                        className={classNames(
                          styles.button,
                          styles['is-info'],
                          styles['is-outlined']
                        )}
                        onClick={this.toggleModalLogin}
                      >
                        Masuk
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    className={classNames(
                      styles['navbar-item'],
                      styles['has-dropdown'],
                      styles['is-hoverable']
                    )}
                  >
                    <span className={classNames(styles['navbar-link'])}>
                      Hai,&nbsp;
                      {userData().fullName}
                    </span>

                    <div className={classNames(styles['navbar-dropdown'])}>
                      <Link
                        to="/profile"
                        className={classNames(styles['navbar-item'])}
                      >
                        Profile
                      </Link>
                      <hr className={classNames(styles['navbar-divider'])} />
                      <a
                        role="button"
                        onClick={signOut}
                        onKeyPress={signOut}
                        className={classNames(styles['navbar-item'])}
                      >
                        Keluar
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>

        <div className={cssModalLogin}>
          <div className={classNames(styles['modal-background'])} />
          <div className={classNames(styles['modal-content'])}>
            <div className={classNames(styles['box-login'])}>
              <div className={classNames(styles.subtitle)}>
                Login to Your Account.
              </div>
              <div className={classNames(styles['title-login'])} />

              <Formik
                initialValues={this.initialValues}
                validationSchema={loginSchema}
                onSubmit={(values, actions) => {
                  setTimeout(() => {
                    this.handleLogin(values)
                    actions.setSubmitting(false)
                  }, 1000)
                }}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className={classNames(styles.field)}>
                      <label className={classNames(styles.label)}>Email</label>
                    </div>
                    <Field
                      name="email"
                      type="email"
                      placeholder="example@mail.com"
                      component={FormikInput}
                    />

                    <div className={classNames(styles.field)}>
                      <label className={classNames(styles.label)}>
                        Password
                      </label>
                    </div>
                    <Field
                      name="password"
                      type="password"
                      placeholder="*****"
                      component={FormikInput}
                    />

                    <div
                      className={classNames(styles.field)}
                      style={{ paddingTop: '10px' }}
                    >
                      <div className={classNames(styles.control)}>
                        <button
                          type="submit"
                          className={
                            isSubmitting
                              ? classNames(
                                  styles.button,
                                  styles['is-info'],
                                  styles['is-medium'],
                                  styles['is-loading']
                                )
                              : classNames(
                                  styles.button,
                                  styles['is-info'],
                                  styles['is-medium']
                                )
                          }
                          style={{ width: '100%' }}
                        >
                          Masuk
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>

              <br />
              <div className={classNames(styles.field)}>
                <p
                  className={classNames(
                    styles['help-login'],
                    styles['has-text-danger']
                  )}
                >
                  {authError}
                </p>
              </div>

              <div className={classNames(styles.field)} align="center">
                <p
                  className={classNames(styles.help)}
                  style={{ fontSize: '14px' }}
                >
                  <a href="/join/signup">Belum punya akun?</a>
                  &nbsp; atau &nbsp;
                  <a
                    role="button"
                    onKeyPress={this.toggleModalForgotPass}
                    onClick={this.showForgotPass}
                  >
                    Lupa Password
                  </a>
                </p>
              </div>
            </div>
          </div>
          <button
            type="button"
            className={classNames(styles['modal-close'], styles['is-large'])}
            onClick={this.toggleModalLogin}
            aria-label="close"
          />
        </div>
      </>
    )
  }
}

DefaultHeader.propTypes = {
  auth: PropTypes.bool,
  signIn: PropTypes.func,
  signOut: PropTypes.func,
  authError: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node
  ])
}

const mapStateToProps = state => ({
  authError: state.auth.error,
  auth: state.auth.authenticated
})

const mapDispatchToProps = dispatch => ({
  signIn: credentials => dispatch(signIn(credentials)),
  signOut: () => dispatch(signOut())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultHeader)
