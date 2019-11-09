import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from '../styles.module.css'

const invalidValues = [undefined, null, '']

const Figure = props => {
  const { size, children } = props
  return (
    <figure className={classNames(styles.image, styles[`is-${size}`])}>
      {children}
    </figure>
  )
}

const Image = props => {
  const { src, width, alt, isRounded } = props
  const isRound = isRounded && 'is-rounded'
  return (
    <img
      className={classNames(styles[isRound])}
      src={src}
      width={width}
      alt={alt}
    />
  )
}

const IFrame = props => {
  const { src, width, height, frameBorder, allowFullScreen, title } = props
  const isAllowFullScreen = !!allowFullScreen
  const isFrameBorder = !invalidValues.includes(frameBorder) ? frameBorder : '0'
  return (
    <iframe
      className={classNames(styles['has-ratio'])}
      width={width}
      height={height}
      src={src}
      frameBorder={isFrameBorder}
      allowFullScreen={isAllowFullScreen}
      title={title}
    />
  )
}

Figure.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node
}

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.string,
  alt: PropTypes.string,
  isRounded: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node
  ])
}

IFrame.propTypes = {
  src: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string,
  allowFullScreen: PropTypes.bool,
  frameBorder: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}

export { Figure, Image, IFrame }
