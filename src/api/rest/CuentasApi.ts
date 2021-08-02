import { AxiosResponse } from 'axios'
import AxiosIntance from '../../axios/axiosInstace';


export class CuentasApi {
    private BaseUrl = 'cuentas'

    getAllCuentas(): Promise<AxiosResponse> {
        return AxiosIntance.get(this.BaseUrl)
    }

    addCuentas(cuenta):Promise<AxiosResponse> {
        return AxiosIntance.post(this.BaseUrl,cuenta)
    }

    getCuentasList() :Promise<AxiosResponse> {
        return AxiosIntance.get(`${this.BaseUrl}/list`)
    }

    getSedesList() :Promise<AxiosResponse> {
        return AxiosIntance.get(`${this.BaseUrl}/sedes`)
    }
}