const url = {
  production: 'http://localhost:8000/v1',
  staging: 'http://localhost:8000/v1',
  development: 'http://localhost:8000/v1'
}

const file = {
  production: 'http://localhost:8000',
  staging: 'http://localhost:8000',
  development: 'http://localhost:8000'
}

const ENV_URL = process.env.REACT_APP_BUILD_ENV || 'development'
const ENV_FILE = process.env.REACT_APP_BUILD_ENV || 'development'

export const API_URL = url[ENV_URL]
export const API_FILE = file[ENV_FILE]
