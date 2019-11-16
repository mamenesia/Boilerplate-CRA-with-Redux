import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from '../styles.module.css'

const Media = ({ children }) => (
  <article className={classNames(styles.media)}>{children}</article>
)

const MediaSide = ({ children, align }) => (
  <div className={classNames({ [styles[`media-${align}`]]: align })}>
    {children}
  </div>
)

const MediaContent = ({ children, style }) => (
  <div className={classNames(styles['media-content'])} style={style}>
    <div className={classNames(styles.content)}>{children}</div>
  </div>
)

Media.propTypes = {
  children: PropTypes.node,
}

MediaSide.propTypes = {
  children: PropTypes.node,
  align: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.node,
  ]),
}

MediaContent.propTypes = {
  children: PropTypes.node,
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.node,
  ]),
}

export { Media, MediaSide, MediaContent }
