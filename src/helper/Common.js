import React from 'react'
import jwt from 'jsonwebtoken'
import classNames from 'classnames'
import styles from '../app.module.css'

const invalidValues = [undefined, null, '']

const userData = () => {
  const token = localStorage.getItem('token')
  let User = ''

  if (token) {
    let getToken = ''
    const splitToken = token.split(' ')
    if (splitToken.length === 2) {
      ;[, getToken] = splitToken
    }

    User = jwt.decode(getToken)
  }
  return User
}

const formDataFilterByKeys = objFormData => {
  const formData = new FormData()
  const ObjKeys = Object.keys(objFormData)

  for (let i = 0; i < ObjKeys.length; i += 1) {
    const dataItems = ObjKeys[i]
    if (objFormData[dataItems]) {
      formData.append(dataItems, objFormData[dataItems])
    }
  }
  return formData
}

const fileUploadPreview = (filePreviewUrl, fileType, fileSize) => {
  let filterFileSize = ''
  if (Math.ceil(fileSize / 1024) > 1024) {
    filterFileSize = `${Math.ceil(fileSize / 1048576)} Mb`
  } else {
    filterFileSize = `${Math.ceil(fileSize / 1024)} Kb`
  }
  return (
    <>
      <button
        type="button"
        disabled
        className={classNames(
          styles.button,
          styles['is-light'],
          styles['is-small']
        )}
      >
        <b>{filePreviewUrl}</b>
      </button>
      &nbsp;&nbsp;
      {!invalidValues.includes(fileType) ? (
        <button
          type="button"
          disabled
          className={classNames(
            styles.button,
            styles['is-info'],
            styles['is-small']
          )}
        >
          <b>{fileType}</b>
        </button>
      ) : (
        <span>&nbsp;</span>
      )}
      &nbsp;&nbsp;
      {!invalidValues.includes(fileSize) ? (
        <button
          type="button"
          disabled
          className={classNames(
            styles.button,
            styles['is-warning'],
            styles['is-small']
          )}
        >
          <b>{filterFileSize}</b>
        </button>
      ) : (
        <span>&nbsp;</span>
      )}
    </>
  )
}

const checkFilePreview = paramsURL => (
  <a
    href={paramsURL}
    target="_blank"
    rel="noopener noreferrer"
    className={classNames(
      styles.button,
      styles['is-primary'],
      styles['is-outlined']
    )}
  >
    Lihat File
  </a>
)

const placeholderInputFile = () => (
  <span style={{ color: 'rgba(54, 54, 54, 0.3)' }}>File belum diupload...</span>
)

const requireLabel = () => (
  <span className={classNames(styles['has-text-danger'])}>*</span>
)

const handleBack = () => {
  window.history.back()
}

export {
  userData,
  formDataFilterByKeys,
  fileUploadPreview,
  checkFilePreview,
  placeholderInputFile,
  requireLabel,
  handleBack
}
