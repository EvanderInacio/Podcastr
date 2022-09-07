import axios from 'axios'

const baseURL =
  process.env.ENV === 'dev'
    ? 'http://localhost:3333'
    : 'https://my-json-server.typicode.com/pereirafi/podcastrnext'

export const api = axios.create({
  baseURL
})