import React from 'react'
import Swal from 'sweetalert2'
import styles from '../app.module.css'
import classNames from 'classnames'
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

const AlertError = params => {
  Swal.fire({
    title: params.title,
    text: params.text,
    type: params.icon,
    confirmButtonColor: '#20a8d8',
    allowOutsideClick: false,
    allowEscapeKey: false
  })
}

const ErrorMessage = params => {
  if (!invalidValues.includes(params)) {
    return params.map(row => (
      <div className={classNames(styles.field)} key={`rmesage-${row.message}`}>
        <p className={classNames(styles.help, styles['has-text-danger'])}>
          {row.message}
        </p>
      </div>
    ))
  }
}

export { AlertSuccess, AlertError, ErrorMessage }
