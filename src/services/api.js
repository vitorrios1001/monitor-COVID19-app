import axios from 'axios'

const docLink = 'https://covid19-brazil-api-docs.now.sh/'

const baseURL = 'https://covid19-brazil-api.now.sh/api/report'

const api = axios.create({
  baseURL,
})

export default api
