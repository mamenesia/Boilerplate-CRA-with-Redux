import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from '../styles.module.css'

const Section = props => {
  const {
    children,
    withPadding,
    background,
    bgImage,
    color,
    medium,
    large,
    style
  } = props
  const isSection = withPadding && 'section'
  const isMedium = medium && 'is-medium'
  const isLarge = large && 'is-large'
  return (
    <section
      className={classNames(
        styles[isSection],
        styles[`has-background-${background}`],
        styles[`${bgImage}`],
        styles[`has-text-${color}`],
        styles[isMedium],
        styles[isLarge]
      )}
      style={style}
    >
      {children}
    </section>
  )
}

const SectionHero = props => {
  const {
    children,
    medium,
    bold,
    large,
    fullheight,
    fullheightWithNavbar,
    color,
    style
  } = props
  const isMedium = medium && 'is-medium'
  const isBold = bold && 'is-bold'
  const isLarge = large && 'is-large'
  const isFullHeight = fullheight && 'is-fullheight'
  const isFullHeightWithNavbar =
    fullheightWithNavbar && 'is-fullheight-with-navbar'
  return (
    <section
      className={classNames(
        styles.hero,
        styles[`is-${color}`],
        styles[isMedium],
        styles[isBold],
        styles[isLarge],
        styles[isFullHeight],
        styles[isFullHeightWithNavbar]
      )}
      style={style}
    >
      {children}
    </section>
  )
}

const HeroHead = props => {
  const { children, style } = props
  return (
    <div className={classNames(styles['hero-head'])} style={style}>
      {children}
    </div>
  )
}

const HeroBody = props => {
  const { children, style } = props
  return (
    <div className={classNames(styles['hero-body'])} style={style}>
      {children}
    </div>
  )
}

const HeroFoot = props => {
  const { children, style } = props
  return (
    <div className={classNames(styles['hero-foot'])} style={style}>
      {children}
    </div>
  )
}

const Container = props => {
  const { children, fluid, widescreen, fullhd, centered } = props
  const isFluid = fluid && 'is-fluid'
  const isWideScreen = widescreen && 'is-widescreen'
  const isFullHd = fullhd && 'is-fullhd'
  const isCentered = centered && 'has-text-centered'
  return (
    <div
      className={classNames(
        styles.container,
        styles[isFluid],
        styles[isWideScreen],
        styles[isFullHd],
        styles[isCentered]
      )}
    >
      {children}
    </div>
  )
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
  medium: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node
  ]),
  large: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node
  ]),
  children: PropTypes.node
}

SectionHero.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
  medium: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.node
  ]),
  bold: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.node]),
  large: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.node
  ]),
  fullheight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.node
  ]),
  fullheightWithNavbar: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.node
  ]),
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node
  ])
}

HeroHead.propTypes = {
  children: PropTypes.node,
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node
  ])
}

HeroBody.propTypes = {
  children: PropTypes.node,
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node
  ])
}

HeroFoot.propTypes = {
  children: PropTypes.node,
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node
  ])
}

Container.propTypes = {
  children: PropTypes.node,
  fluid: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node
  ]),
  widescreen: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node
  ]),
  fullhd: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node
  ]),
  centered: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node
  ])
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

export {
  Section,
  SectionHero,
  HeroHead,
  HeroBody,
  HeroFoot,
  Columns,
  Column,
  Container
}
