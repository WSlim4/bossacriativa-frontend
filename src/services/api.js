import axios from 'axios'

const api = axios.create({
    baseURL: 'https://bossa-backend.herokuapp.com/'
})

export default api