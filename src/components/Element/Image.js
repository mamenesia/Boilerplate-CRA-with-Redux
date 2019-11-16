import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from '../styles.module.css'

const invalidValues = [undefined, null, '']

const Figure = ({ children, size, style }) => (
  <figure
    className={classNames(styles.image, { [styles[`is-${size}`]]: size })}
    style={style}
  >
    {children}
  </figure>
)

const Image = ({ src, alt, width, rounded, style }) => (
  <img
    className={classNames({ [styles['is-rounded']]: rounded })}
    src={src}
    width={width}
    alt={alt}
    style={style}
  />
)

const IFrame = ({
  src,
  width,
  height,
  frameBorder,
  allowFullScreen,
  title,
}) => {
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
  children: PropTypes.node,
  style: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node,
  ]),
}

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.string,
  alt: PropTypes.string,
  rounded: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node,
  ]),
  style: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node,
  ]),
}

IFrame.propTypes = {
  src: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string,
  allowFullScreen: PropTypes.bool,
  frameBorder: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
}

export { Figure, Image, IFrame }
