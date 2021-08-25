import axios from "axios"
import { getDataLocalStorage } from "../helpers/LocalStorage"

const AxiosIntance = axios.create(
    {
        baseURL: 'http://localhost:3001/api/v1',
    })
AxiosIntance.interceptors.request.use(
    (config) => {
        const { access_token } = getDataLocalStorage('access_token') || ''
        if (access_token) {
            config.headers.Authorization = `Bearer ${access_token}`
        }

        return config

    },
    (error) => {
        return Promise.reject(error);
    }
)


export default AxiosIntance