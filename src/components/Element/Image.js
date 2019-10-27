import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from '../styles.module.css'

const Figure = props => {
  const { size, children } = props
  return (
    <figure className={classNames(styles.image, styles[`${size}`])}>
      {children}
    </figure>
  )
}

const Image = props => {
  const { src, width, alt } = props
  return (
    <>
      <img src={src} width={width} alt={alt} />
    </>
  )
}

Figure.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node
}

Image.propTypes = {
  src: PropTypes.string,
  width: PropTypes.string,
  alt: PropTypes.string
}

export { Figure, Image }
