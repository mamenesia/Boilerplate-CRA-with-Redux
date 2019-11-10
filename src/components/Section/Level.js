import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from '../styles.module.css'

const Level = props => {
  const { children, mobile } = props
  const isMobile = mobile && 'is-mobile'
  return (
    <nav className={classNames(styles.level, styles[isMobile])}>{children}</nav>
  )
}

const LevelLeft = props => {
  const { children } = props
  return <div className={classNames(styles['level-left'])}>{children}</div>
}

const LevelRight = props => {
  const { children } = props
  return <div className={classNames(styles['level-right'])}>{children}</div>
}

const LevelItem = props => {
  const { children, tag, centered } = props
  const isCenter = centered && 'has-text-centered'
  if (tag === 'p') {
    return (
      <p className={classNames(styles['level-item'], styles[isCenter])}>
        {children}
      </p>
    )
  }

  return (
    <div className={classNames(styles['level-item'], styles[isCenter])}>
      {children}
    </div>
  )
}

const LevelHeading = ({ children }) => {
  return <p className={classNames(styles.heading)}>{children}</p>
}

const LevelTitle = ({ children }) => {
  return <p className={classNames(styles.title)}>{children}</p>
}

Level.propTypes = {
  children: PropTypes.node,
  mobile: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.node
  ])
}

LevelLeft.propTypes = {
  children: PropTypes.node
}

LevelRight.propTypes = {
  children: PropTypes.node
}

LevelItem.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.node]),
  centered: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.node
  ])
}

LevelHeading.propTypes = {
  children: PropTypes.node
}

LevelTitle.propTypes = {
  children: PropTypes.node
}

export { Level, LevelLeft, LevelRight, LevelItem, LevelHeading, LevelTitle }
