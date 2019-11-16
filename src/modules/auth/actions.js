import axios from 'axios'
import { API_URL } from '../../config/apiConfig'
import { AlertSuccess, AlertError } from '../../helper'

import {
  SIGNIN_LOADING,
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTHENTICATION_ERROR,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
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
      isLoading: false,
    })
  }
}

export const signUp = rowData => async dispatch => {
  let ObjError = ''
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
    ObjError = err.response && err.response.data.message

    dispatch({ type: SIGNUP_ERROR, payload: ObjError, isLoading: false })
    AlertError(err)
  }
}

export const signOut = () => dispatch => {
  localStorage.removeItem('token')
  localStorage.removeItem('uid')
  localStorage.removeItem('rid')
  dispatch({ type: UNAUTHENTICATED })
  window.location.reload()
}
