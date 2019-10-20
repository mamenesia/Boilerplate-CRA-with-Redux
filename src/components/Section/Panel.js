import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.module.css'
import classNames from 'classnames'

const Panel = props => {
  const { title, style, children } = props
  return (
    <React.Fragment>
      <nav
        className={classNames(styles.panel, styles['is-reveal-box'])}
        style={style}
      >
        <p
          className={classNames(
            styles['panel-heading'],
            styles['has-text-centered']
          )}
        >
          {title}
        </p>
        <div className={classNames(styles['panel-block'])}>{children}</div>
      </nav>
    </React.Fragment>
  )
}

Panel.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),
  children: PropTypes.node
}

export default Panel
