import axios from 'axios'

export const BASE_URL = 'http://localhost:3333/'

export const apiClient = axios.create({
  baseURL: BASE_URL,
})

axios.defaults.adapter = require('axios/lib/adapters/http')
