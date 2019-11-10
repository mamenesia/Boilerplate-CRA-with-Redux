import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from '../styles.module.css'

const Media = props => {
  const { children } = props
  return <article className={classNames(styles.media)}>{children}</article>
}

const MediaLeft = props => {
  const { children } = props
  return <div className={classNames(styles['media-left'])}>{children}</div>
}

const MediaRight = props => {
  const { children } = props
  return <div className={classNames(styles['media-right'])}>{children}</div>
}

const MediaContent = props => {
  const { children } = props
  return (
    <div className={classNames(styles['media-content'])}>
      <div className={classNames(styles.content)}>{children}</div>
    </div>
  )
}

Media.propTypes = {
  children: PropTypes.node
}

MediaLeft.propTypes = {
  children: PropTypes.node
}

MediaRight.propTypes = {
  children: PropTypes.node
}

MediaContent.propTypes = {
  children: PropTypes.node
}

export { Media, MediaLeft, MediaRight, MediaContent }
