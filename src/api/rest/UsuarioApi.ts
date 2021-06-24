import axios, { AxiosResponse } from 'axios'

import IPersona from "../models/IPersona";

export class UsuarioApi {
    private BaseUrl = 'http://localhost:3000/api/v1/login'

    login(user:any): Promise<AxiosResponse> {
        return axios.post(this.BaseUrl, user)
    }
}