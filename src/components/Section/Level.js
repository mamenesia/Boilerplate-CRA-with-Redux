import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from '../styles.module.css'

const Levels = ({ children, mobile, style }) => (
  <nav
    className={classNames(styles.level, { [styles['is-mobile']]: mobile })}
    style={style}
  >
    {children}
  </nav>
)

const LevelSide = ({ children, align }) => (
  <div className={classNames(styles[`level-${align}`])}>{children}</div>
)

const LevelItem = ({ children, align, tag, style }) => {
  if (tag === 'p') {
    return (
      <p
        className={classNames(styles['level-item'], {
          [styles[`has-text-${align}`]]: align,
        })}
        style={style}
      >
        {children}
      </p>
    )
  }

  return (
    <div
      className={classNames(styles['level-item'], {
        [styles[`has-text-${align}`]]: align,
      })}
      style={style}
    >
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

Levels.propTypes = {
  children: PropTypes.node,
  mobile: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.node,
  ]),
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.node,
  ]),
}

LevelSide.propTypes = {
  children: PropTypes.node,
  align: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.node,
  ]),
}

LevelItem.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.node]),
  align: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.node,
  ]),
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.node,
  ]),
}

LevelHeading.propTypes = {
  children: PropTypes.node,
}

LevelTitle.propTypes = {
  children: PropTypes.node,
}

export { Levels, LevelSide, LevelItem, LevelHeading, LevelTitle }
