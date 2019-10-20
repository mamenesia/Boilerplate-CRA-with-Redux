import axios from 'axios'
import { API_URL } from '../../config/apiConfig'
import { AlertSuccess, AlertError } from '../../helper/Alert'

import {
  SIGNIN_LOADING,
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTHENTICATION_ERROR,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from './types'

axios.defaults.baseURL = `${API_URL}`

export const signIn = credentials => async dispatch => {
  try {
    dispatch({ type: SIGNIN_LOADING, isLoading: true })
    // Call API
    const res = await axios.post('/auth/signin', credentials)
    localStorage.setItem('token', res.data.token)
    localStorage.setItem('uid', res.data.uid)
    localStorage.setItem('rid', res.data.rid)
    dispatch({ type: AUTHENTICATED, isLoading: false })
    window.location.href = '/profile'
  } catch (err) {
    // console.log(err.response)
    dispatch({
      type: AUTHENTICATION_ERROR,
      payload: err.response.data.message,
      isLoading: false
    })
  }
}

export const signUp = rowData => async dispatch => {
  let ObjError = ''
  let pesanError = ''
  const paramsResponse = {}

  try {
    dispatch({ type: SIGNUP_LOADING, isLoading: true })
    // Call API
    const res = await axios.post('/auth/signup', rowData)
    dispatch({ type: SIGNUP_SUCCESS, isLoading: false })
    paramsResponse.title = res.statusText
    paramsResponse.text = res.data.message
    paramsResponse.icon = 'success'
    paramsResponse.link = '/email/verify'
    AlertSuccess(paramsResponse)
  } catch (err) {
    // console.log(err.response.data)
    if (
      err.response.data.errors !== undefined &&
      err.response.data.errors.length > 0
    ) {
      ObjError = err.response.data.errors

      if (err.response.data.errors.length === 1) {
        pesanError = err.response.data.errors[0].message
      } else {
        pesanError = 'Masih ada inputan yang belum diisi!'
      }
      // console.log(ObjError)
    } else {
      ObjError = err.response.data
      pesanError = err.response.data[0].message
      // console.log(ObjError)
    }

    paramsResponse.title = 'Gagal!'
    paramsResponse.text = pesanError
    paramsResponse.icon = 'error'

    dispatch({ type: SIGNUP_ERROR, payload: ObjError, isLoading: false })
    AlertError(paramsResponse)
  }
}

export const signOut = () => dispatch => {
  localStorage.removeItem('token')
  localStorage.removeItem('uid')
  localStorage.removeItem('rid')
  dispatch({ type: UNAUTHENTICATED })
  window.location.reload()
}
