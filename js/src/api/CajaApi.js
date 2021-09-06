import AxiosIntance from '../axios/axiosInstace';
export class CajaApi {
     BaseUrl = 'caja'

    getAllMovimientos() {
        return AxiosIntance.get(`${this.BaseUrl}/movimientos`)
    }

    getModosPago() {
        return AxiosIntance.get(`recibos/modospago`)
    }

    addMovimientoCaja() {
        return AxiosIntance.post(`${this.BaseUrl}`)
    }

    setDataReciboGeneral(idCuentaPerosna){
        return AxiosIntance.get(`recibos/setDataRecibo/${idCuentaPerosna}`)
    }

}