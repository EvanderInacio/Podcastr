import axios from 'axios'

const baseURL =
  process.env.ENV === 'dev'
    ? 'http://localhost:3333'
    : 'https://capelaum-json-server.herokuapp.com'

export const api = axios.create({
  baseURL
})