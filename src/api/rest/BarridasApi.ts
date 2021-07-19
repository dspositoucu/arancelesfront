import { AxiosResponse } from 'axios'
import AxiosIntance from '../../axios/axiosInstace';


export class BarridasApi {
    private BaseUrl = 'barridas'

    getAllBarridas(): Promise<AxiosResponse> {
        return AxiosIntance.get(this.BaseUrl)
    }

    addBarridas(cuenta):Promise<AxiosResponse> {
        return AxiosIntance.post(this.BaseUrl,cuenta)
    }

}