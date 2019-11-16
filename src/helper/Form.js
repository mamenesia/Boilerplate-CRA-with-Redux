import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'
import styles from '../components/styles.module.css'
import { FieldInput, FieldControl, Help } from '../components'

const CfInput = ({ field, form: { touched, errors }, ...props }) => (
  <FieldInput>
    <FieldControl>
      <input {...field} {...props} className={styles.input} />
    </FieldControl>
    {touched[field.name] && errors[field.name] && (
      <Help color="danger">{errors[field.name]}</Help>
    )}
  </FieldInput>
)

const CfTextArea = ({ field, form: { touched, errors }, ...props }) => (
  <div className={styles.field}>
    <div className={styles.control}>
      <textarea {...field} {...props} className={styles.textarea} />
    </div>
    {touched[field.name] && errors[field.name] && (
      <p className={[styles.help, styles['is-danger']].join(' ')}>
        {errors[field.name]}
      </p>
    )}
  </div>
)

const CfSelect = ({
  options,
  field,
  form: { touched, errors, setFieldValue },
  onSelectChange,
  ...props
}) => (
  <div className={styles.field}>
    <div className={styles.control}>
      <Select
        {...field}
        {...props}
        options={options}
        className="basic-single"
        classNamePrefix="select"
        value={
          options ? options.find(option => option.value === field.value) : ''
        }
        onChange={option => {
          if (onSelectChange) {
            onSelectChange(field.name, option.value)
          }
          setFieldValue(field.name, option.value)
        }}
        isDisabled={!(options && options.length > 0)}
      />
    </div>
    {touched[field.name] && errors[field.name] && (
      <p className={[styles.help, styles['is-danger']].join(' ')}>
        {errors[field.name]}
      </p>
    )}
  </div>
)

CfInput.propTypes = {
  field: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  form: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
}

CfTextArea.propTypes = {
  field: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  form: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
}

CfSelect.propTypes = {
  options: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  field: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  form: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
  onSelectChange: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func,
  ]),
}

export { CfInput, CfTextArea, CfSelect }
