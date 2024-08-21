import axios from 'axios'

import { HOST_API } from '@/global-config'

const axiosInstance = axios.create({
  baseURL: HOST_API,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Interceptors response

export const endpoints = {}
