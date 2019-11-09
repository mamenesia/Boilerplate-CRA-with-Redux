import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from '../styles.module.css'

const Section = props => {
  const { children, withPadding, background, bgImage, color, style } = props
  const isSection = withPadding && 'section'
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
  const {
    children,
    multiline,
    vCentered,
    desktop,
    mobile,
    gapless,
    variable,
    sizeVariable,
    style
  } = props
  const isMultiLine = multiline && 'is-multiline'
  const isDesktop = desktop && 'is-desktop'
  const isMobile = mobile && 'is-mobile'
  const isCentered = vCentered && 'is-vcentered'
  const isGapless = gapless && 'is-gapless'
  const isVariable = variable && 'is-variable'
  const sizeVar = variable && sizeVariable ? sizeVariable : 'is-3'
  return (
    <div
      className={classNames(
        styles.columns,
        styles[isMultiLine],
        styles[isDesktop],
        styles[isMobile],
        styles[isCentered],
        styles[isGapless],
        styles[isVariable],
        styles[sizeVar]
      )}
      style={style}
    >
      {children}
    </div>
  )
}

const Column = props => {
  const { children, size, offset, narrow, style } = props
  const isNarrow = narrow && narrow
  return (
    <div
      className={classNames(
        styles.column,
        styles[`is-${size}`],
        styles[`is-offset-${offset}`],
        styles[isNarrow]
      )}
      style={style}
    >
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
  withPadding: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node
  ]),
  children: PropTypes.node
}

Container.propTypes = {
  children: PropTypes.node
}

Columns.propTypes = {
  multiline: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node
  ]),
  desktop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node
  ]),
  mobile: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node
  ]),
  vCentered: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node
  ]),
  gapless: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node
  ]),
  variable: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node
  ]),
  sizeVariable: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node
  ])
}

Column.propTypes = {
  size: PropTypes.string,
  offset: PropTypes.string,
  narrow: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node
  ]),
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node
  ]),
  children: PropTypes.node
}

export { Section, Columns, Column, Container }
