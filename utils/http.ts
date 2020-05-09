import axios from 'axios'

const API = 'https://hn.algolia.com/api/v1'

const http = axios.create({baseURL: API})

export default http