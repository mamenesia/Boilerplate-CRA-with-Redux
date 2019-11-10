import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from '../styles.module.css'
import '../../app.module.css'

const invalidValues = [undefined, null, '']

const FieldInput = ({ children }) => {
  return <div className={classNames(styles.field)}>{children}</div>
}

const Label = ({ children }) => {
  return <label className={classNames(styles.label)}>{children}</label>
}

const Input = props => {
  const { iconLeft, iconRight } = props
  const isIconLeft = !invalidValues.includes(iconLeft) && 'has-icons-left'
  const isIconRight = !invalidValues.includes(iconRight) && 'has-icons-right'
  return (
    <div
      className={classNames(
        styles.control,
        styles[isIconLeft],
        styles[isIconRight]
      )}
    >
      <input
        className={classNames(styles.input)}
        type="text"
        placeholder="Text input"
        value=""
      />

      {/* for icon left */}
      {!invalidValues.includes(iconLeft) && (
        <span
          className={classNames(
            styles.icon,
            styles['is-small'],
            styles['is-left']
          )}
        >
          <i className={classNames(iconLeft)} />
        </span>
      )}

      {/* for icon right */}
      {!invalidValues.includes(iconRight) && (
        <span
          className={classNames(
            styles.icon,
            styles['is-small'],
            styles['is-right']
          )}
        >
          <i className={classNames(iconRight)} />
        </span>
      )}
    </div>
  )
}

FieldInput.propTypes = {
  children: PropTypes.node
}

Label.propTypes = {
  children: PropTypes.node
}

Input.propTypes = {
  iconLeft: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node
  ]),
  iconRight: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.node
  ])
}

export { FieldInput, Label, Input }
