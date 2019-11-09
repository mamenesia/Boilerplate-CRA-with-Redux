import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from '../styles.module.css'

const Title = props => {
  const { size, color, style, children } = props
  return (
    <h1
      className={classNames(
        styles.title,
        styles[`is-${size}`],
        styles[`has-text-${color}`]
      )}
      style={style}
    >
      {children}
    </h1>
  )
}

const SubTitle = props => {
  const { size, color, style, children } = props
  return (
    <h2
      className={classNames(
        styles.subtitle,
        styles[`is-${size}`],
        styles[`has-text-${color}`]
      )}
      style={style}
    >
      {children}
    </h2>
  )
}

Title.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),
  children: PropTypes.node
}

SubTitle.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),
  children: PropTypes.node
}

export { Title, SubTitle }
