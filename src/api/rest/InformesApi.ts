import { AxiosResponse } from 'axios'
import AxiosIntance from '../../axios/axiosInstace';


export class InformesApi {
    private BaseUrl = 'informes'

    getAllDataInformes(): Promise<AxiosResponse> {
        return AxiosIntance.get(this.BaseUrl)
    }


}