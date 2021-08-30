import { AxiosResponse } from 'axios'
import AxiosIntance from '../../axios/axiosInstace';

export class CtacteApi {
    private BaseUrl = 'ctacte'

    getCtacte(idCuentaPersona): Promise<AxiosResponse> {
        return AxiosIntance.get(`${this.BaseUrl}/${idCuentaPersona}`)
    }

    getAddMovCtacte(idCuentaPersona, movCtacte): Promise<AxiosResponse> {
        return AxiosIntance.post(`${this.BaseUrl}/${idCuentaPersona}`,movCtacte)
    }

}