import { AxiosResponse } from 'axios'
import AxiosIntance from '../../axios/axiosInstace';


export class CuentasApi {
    private BaseUrl = 'cuentas'

    getAllCuentas(): Promise<AxiosResponse> {
        return AxiosIntance.get(this.BaseUrl)
    }

    addCuentas(newCuenta):Promise<AxiosResponse> {
        return AxiosIntance.post(this.BaseUrl,newCuenta)
    }

    getCuentasList() :Promise<AxiosResponse> {
        return AxiosIntance.get(`${this.BaseUrl}/list`)
    }

    getSedesList() :Promise<AxiosResponse> {
        return AxiosIntance.get(`${this.BaseUrl}/sedes`)
    }
}