import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from '../styles.module.css'

const Message = ({ children, size, color, style }) => (
  <article
    className={classNames(styles.message, {
      [styles[`is-${size}`]]: size,
      [styles[`is-${color}`]]: color,
    })}
    style={style}
  >
    {children}
  </article>
)

const MessageHeader = ({ title, style }) => (
  <div className={classNames(styles['message-header'])} style={style}>
    <p>{title}</p>
  </div>
)

const MessageBody = ({ children, style }) => (
  <div
    className={classNames(styles['message-body'], styles['is-list-message'])}
    style={style}
  >
    {children}
  </div>
)

const Help = ({ children, color, style }) => (
  <p
    className={classNames(styles.help, { [styles[`is-${color}`]]: color })}
    style={style}
  >
    {children}
  </p>
)

Message.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  children: PropTypes.node,
}

MessageHeader.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
}

MessageBody.propTypes = {
  children: PropTypes.node,
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
}

Help.propTypes = {
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  children: PropTypes.node,
}

export { Message, MessageHeader, MessageBody, Help }
