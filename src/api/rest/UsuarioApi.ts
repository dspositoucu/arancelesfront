import { AxiosResponse } from 'axios'
import  AxiosIntance  from '../../axios/axiosInstace'
import IPersona from "../models/IPersona";

export class UsuarioApi {
    private BaseUrl = 'auth/login'

    login(user:any): Promise<AxiosResponse> {
        return AxiosIntance.post(this.BaseUrl, user)
    }

    getAllUsuarios():Promise<AxiosResponse> {
        return AxiosIntance.get('usuario/getAllusuarios')
    }
}