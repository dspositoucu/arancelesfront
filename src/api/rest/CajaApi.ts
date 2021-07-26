import { AxiosResponse } from 'axios'
import AxiosIntance from '../../axios/axiosInstace';


export class CajaApi {
    private BaseUrl = 'caja'

    getAllMovimientos(): Promise<AxiosResponse> {
        return AxiosIntance.get(`${this.BaseUrl}/movimientos`)
    }

}