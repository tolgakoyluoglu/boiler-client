import axios from 'axios'
const { VUE_APP_API_URL } = process.env

axios.defaults.withCredentials = true
axios.defaults.baseURL = VUE_APP_API_URL

export default axios
