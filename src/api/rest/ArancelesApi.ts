import { AxiosResponse } from 'axios'
import AxiosIntance from '../../axios/axiosInstace';


export class ArancelesApi {
    private BaseUrl = 'aranceles'

    getAllAranceles(): Promise<AxiosResponse> {
        return AxiosIntance.get(this.BaseUrl)
    }

    addAranceles(cuenta):Promise<AxiosResponse> {
        return AxiosIntance.post(this.BaseUrl,cuenta)
    }


}