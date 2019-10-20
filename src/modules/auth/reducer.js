import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTHENTICATION_ERROR,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGNIN_LOADING
} from './types'

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGNUP_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case SIGNUP_ERROR:
      return {
        ...state,
        message: action.payload,
        isLoading: action.isLoading
      }

    // Check Authentication
    case SIGNIN_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
        isLoading: action.isLoading
      }
    case UNAUTHENTICATED:
      return {
        ...state,
        authenticated: false
      }
    case AUTHENTICATION_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: action.isLoading
      }

    default:
      return state
  }
}

export default authReducer
