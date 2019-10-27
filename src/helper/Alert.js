import React from 'react'
import Swal from 'sweetalert2'
import classNames from 'classnames'
import styles from '../app.module.css'
import 'sweetalert2/src/sweetalert2.scss'

const invalidValues = [undefined, null, '']

const AlertSuccess = params => {
  Swal.fire({
    title: params.title,
    text: params.text,
    type: params.icon,
    confirmButtonColor: '#20a8d8',
    allowOutsideClick: false,
    allowEscapeKey: false
  })
    .then(() => {
      if (!invalidValues.includes(params.link)) {
        window.location.href = `${params.link}`
      } else {
        window.location.reload()
      }
    })
    .catch(err => {
      console.log(err)
      Swal.fire('Gagal!', 'Oops, Something Wrong!')
    })
}

const AlertError = err => {
  let pesanError
  if (err.response) {
    pesanError = err.response.data.message
  } else {
    pesanError = 'Internal server error'
  }

  Swal.fire({
    title: 'Oops!',
    text: pesanError,
    type: 'error',
    confirmButtonColor: '#20a8d8',
    allowOutsideClick: false,
    allowEscapeKey: false
  })
}

const ErrorMessage = message => {
  if (!invalidValues.includes(message)) {
    return (
      <div className={classNames(styles.field)}>
        <p className={classNames(styles.help, styles['has-text-danger'])}>
          {message}
        </p>
      </div>
    )
  }
}

export { AlertSuccess, AlertError, ErrorMessage }
