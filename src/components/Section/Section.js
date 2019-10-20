import React from 'react'
import PropTypes from 'prop-types'
import styles from './section.module.css'
import classNames from 'classnames'

const Section = props => {
  const { children, withPadding, background, bgImage, color, style } = props
  const isSection = withPadding ? 'section' : ''
  return (
    <section
      className={classNames(
        styles[isSection],
        styles[`has-background-${background}`],
        styles[`${bgImage}`],
        styles[`has-text-${color}`]
      )}
      style={style}
    >
      {children}
    </section>
  )
}

const Container = props => {
  const { children } = props
  return <div className={classNames(styles.container)}>{children}</div>
}

const Columns = props => {
  const { children, multiline, vCentered, desktop, mobile, style } = props
  const isMultiLine = multiline ? 'is-multiline' : ''
  const isDesktop = desktop ? 'is-desktop' : ''
  const isMobile = mobile ? 'is-mobile' : ''
  const isCentered = vCentered ? 'is-vcentered' : ''
  return (
    <div
      className={classNames(
        styles.columns,
        styles[isMultiLine],
        styles[isDesktop],
        styles[isMobile],
        styles[isCentered]
      )}
      style={style}
    >
      {children}
    </div>
  )
}

const Column = props => {
  const { children, size, style } = props
  return (
    <div className={classNames(styles.column, styles[`${size}`])} style={style}>
      {children}
    </div>
  )
}

Section.propTypes = {
  background: PropTypes.string,
  bgImage: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node
  ]),
  color: PropTypes.string,
  withPadding: PropTypes.bool,
  children: PropTypes.node
}

Container.propTypes = {
  children: PropTypes.node
}

Columns.propTypes = {
  multiline: PropTypes.bool,
  desktop: PropTypes.bool,
  mobile: PropTypes.bool,
  vCentered: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node
  ])
}

Column.propTypes = {
  size: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node
  ]),
  children: PropTypes.node
}

export { Section, Columns, Column, Container }
