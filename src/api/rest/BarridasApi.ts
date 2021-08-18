import { AxiosResponse } from 'axios'
import { isJSDocReturnTag } from 'typescript';
import AxiosIntance from '../../axios/axiosInstace';


export class BarridasApi {
    private BaseUrl = 'barridas'

    getAllBarridas(): Promise<AxiosResponse> {
        return AxiosIntance.get(this.BaseUrl)
    }

    addBarridas(newBarrida): Promise<AxiosResponse> {
        return AxiosIntance.post(this.BaseUrl, newBarrida)
    }

    getAllGruposBarridas(): Promise<AxiosResponse> {
        return AxiosIntance.get(`${this.BaseUrl}`)
    }

    getListaGruposBarrida(): Promise<AxiosResponse> {
        return AxiosIntance.get(`${this.BaseUrl}/gruposbarridas`)
    }

}