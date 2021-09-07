import axios from "axios"
import { getStoredAuthToken } from "../utils/authToken"

const AxiosIntance = axios.create(
    {
        baseURL: 'http://localhost:3003/api/v1',
    })
AxiosIntance.interceptors.request.use(
    (config) => {
        const access_token  = getStoredAuthToken() || ''
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