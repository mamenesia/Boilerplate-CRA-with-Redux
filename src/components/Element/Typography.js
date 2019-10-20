import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.module.css'
import classNames from 'classnames'

const Title = props => {
  const { size, color, style, children } = props
  return (
    <React.Fragment>
      <h1
        className={classNames(
          styles.title,
          styles[`is-size-${size}`],
          styles[`has-text-${color}`]
        )}
        style={style}
      >
        {children}
      </h1>
    </React.Fragment>
  )
}

const SubTitle = props => {
  const { size, color, style, children } = props
  return (
    <React.Fragment>
      <h2
        className={classNames(
          styles.subtitle,
          styles[`is-size-${size}`],
          styles[`has-text-${color}`]
        )}
        style={style}
      >
        {children}
      </h2>
    </React.Fragment>
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
