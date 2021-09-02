import { AxiosResponse } from 'axios'
import AxiosIntance from '../../axios/axiosInstace';

export class CajaApi {
    private BaseUrl = 'caja'


    getAllMovimientos(): Promise<AxiosResponse> {
        return AxiosIntance.get(`${this.BaseUrl}/movimientos`)
    }

    getModosPago(): Promise<AxiosResponse> {
        return AxiosIntance.get(`recibos/modospago`)
    }

    addMovimientoCaja(): Promise<AxiosResponse> {
        return AxiosIntance.post(`${this.BaseUrl}`)
    }

    setDataReciboGeneral(idCuentaPerosna):Promise <AxiosResponse>{
        return AxiosIntance.get(`recibos/setDataRecibo/${idCuentaPerosna}`)
    }

}