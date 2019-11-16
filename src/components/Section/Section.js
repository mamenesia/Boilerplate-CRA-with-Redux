import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from '../styles.module.css'

const Section = ({ children, size, background, bgImage, color, style }) => (
  <section
    className={classNames(styles.section, {
      [styles[`has-background-${background}`]]: background,
      [styles[`${bgImage}`]]: bgImage,
      [styles[`has-text-${color}`]]: color,
      [styles[`is-${size}`]]: size,
    })}
    style={style}
  >
    {children}
  </section>
)

const SectionHero = ({
  children,
  color,
  size,
  bold,
  fullHeight,
  fullHeightWithNavbar,
  style,
}) => (
  <section
    className={classNames(styles.hero, {
      [styles[`is-${color}`]]: color,
      [styles[`is-${size}`]]: size,
      [styles['is-bold']]: bold,
      [styles['is-fullheight']]: fullHeight,
      [styles['is-fullheight']]: fullHeight,
      [styles['is-fullheight-with-navbar']]: fullHeightWithNavbar,
    })}
    style={style}
  >
    {children}
  </section>
)

const HeroHead = ({ children, style }) => (
  <div className={classNames(styles['hero-head'])} style={style}>
    {children}
  </div>
)

const HeroBody = ({ children, style }) => (
  <div className={classNames(styles['hero-body'])} style={style}>
    {children}
  </div>
)

const HeroFoot = ({ children, style }) => (
  <div className={classNames(styles['hero-foot'])} style={style}>
    {children}
  </div>
)

const Container = ({ children, fluid, wideScreen, fullHd, align }) => (
  <div
    className={classNames(styles.container, {
      [styles['is-fluid']]: fluid,
      [styles['is-widescreen']]: wideScreen,
      [styles['is-fullhd']]: fullHd,
      [styles[`has-text-${align}`]]: align,
    })}
  >
    {children}
  </div>
)

const Columns = ({
  children,
  style,
  multiline,
  desktop,
  mobile,
  vCentered,
  gapless,
  variable,
  sizeVar,
}) => (
  <div
    className={classNames(styles.columns, {
      [styles['is-multiline']]: multiline,
      [styles['is-desktop']]: desktop,
      [styles['is-mobile']]: mobile,
      [styles['is-vcentered']]: vCentered,
      [styles['is-gapless']]: gapless,
      [styles['is-variable']]: variable,
      [styles[`is-${sizeVar}`]]: sizeVar,
    })}
    style={style}
  >
    {children}
  </div>
)

const Column = ({ children, style, size, offset, narrow }) => (
  <div
    className={classNames(styles.column, {
      [styles[`is-${size}`]]: size,
      [styles[`is-offset-${offset}`]]: offset,
      [styles['is-narrow']]: narrow,
    })}
    style={style}
  >
    {children}
  </div>
)

Section.propTypes = {
  background: PropTypes.string,
  bgImage: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]),
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.bool, PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
}

SectionHero.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.node]),
  bold: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.node]),
  fullHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.node,
  ]),
  fullHeightWithNavbar: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.node,
  ]),
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]),
}

HeroHead.propTypes = {
  children: PropTypes.node,
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]),
}

HeroBody.propTypes = {
  children: PropTypes.node,
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]),
}

HeroFoot.propTypes = {
  children: PropTypes.node,
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]),
}

Container.propTypes = {
  children: PropTypes.node,
  fluid: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node,
  ]),
  wideScreen: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node,
  ]),
  fullHd: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node,
  ]),
  align: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node,
  ]),
}

Columns.propTypes = {
  multiline: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node,
  ]),
  desktop: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node,
  ]),
  mobile: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node,
  ]),
  vCentered: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node,
  ]),
  gapless: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node,
  ]),
  variable: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node,
  ]),
  sizeVar: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]),
}

Column.propTypes = {
  size: PropTypes.string,
  offset: PropTypes.string,
  narrow: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node,
  ]),
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]),
  children: PropTypes.node,
}

export {
  Section,
  SectionHero,
  HeroHead,
  HeroBody,
  HeroFoot,
  Columns,
  Column,
  Container,
}
