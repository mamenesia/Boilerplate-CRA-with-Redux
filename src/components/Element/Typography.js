import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from '../styles.module.css'

const Title = ({ children, size, color, style }) => (
  <h1
    className={classNames(styles.title, {
      [styles[`is-${size}`]]: size,
      [styles[`has-text-${color}`]]: color,
    })}
    style={style}
  >
    {children}
  </h1>
)

const SubTitle = ({ children, size, color, style }) => (
  <h2
    className={classNames(styles.subtitle, {
      [styles[`is-${size}`]]: size,
      [styles[`has-text-${color}`]]: color,
    })}
    style={style}
  >
    {children}
  </h2>
)

Title.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  children: PropTypes.node,
}

SubTitle.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  children: PropTypes.node,
}

export { Title, SubTitle }
