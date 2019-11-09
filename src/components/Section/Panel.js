import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from '../styles.module.css'

const Panel = props => {
  const { title, styleHead, styleBody, withBorder, children } = props
  const isPanelWithBorder = withBorder
    ? 'panel-heading-with-border'
    : 'panel-heading'
  const isPanelBlock = withBorder ? 'panel-block-with-border' : 'panel-block'

  return (
    <nav className={classNames(styles.panel, styles['is-reveal-box'])}>
      <p
        className={classNames(
          styles[isPanelWithBorder],
          styles['has-text-centered']
        )}
        style={styleHead}
      >
        {title}
      </p>
      <div className={classNames(styles[isPanelBlock])} style={styleBody}>
        {children}
      </div>
    </nav>
  )
}

Panel.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),
  styleHead: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),
  styleBody: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),
  withBorder: PropTypes.bool,
  children: PropTypes.node
}

export default Panel
