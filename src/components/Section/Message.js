import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles.module.css'
import classNames from 'classnames'

const Message = props => {
  const { color, size, children } = props
  return (
    <article
      className={classNames(
        styles.message,
        styles[`is-${size}`],
        styles[`is-${color}`]
      )}
    >
      {children}
    </article>
  )
}

const MessageHeader = props => {
  const { title } = props
  return (
    <div className={classNames(styles['message-header'])}>
      <p>{title}</p>
    </div>
  )
}

const MessageBody = props => {
  const { children } = props
  return (
    <div
      className={classNames(styles['message-body'], styles['is-list-message'])}
    >
      {children}
    </div>
  )
}

const Help = props => {
  const { color, children } = props
  return (
    <p className={classNames(styles.help, styles[`is-${color}`])}>{children}</p>
  )
}

Message.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),
  children: PropTypes.node
}

MessageHeader.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ])
}

MessageBody.propTypes = {
  children: PropTypes.node
}

Help.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),
  children: PropTypes.node
}

export { Message, MessageHeader, MessageBody, Help }
