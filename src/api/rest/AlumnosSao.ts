import { AxiosResponse } from 'axios'
import AxiosIntance from '../../axios/axiosInstace';


export class AlumnosSao {
    private BaseUrl = 'sao_personas'

    getNuevosAlumnosSao(): Promise<AxiosResponse> {
        return AxiosIntance.get(this.BaseUrl)
    }

}