import { AxiosResponse } from 'axios'
import AxiosIntance from '../../axios/axiosInstace';


export class ActividadesExtensionApi {
    private BaseUrl = 'cuentas/actividadesExtension'

    getActividadesExtension(): Promise<AxiosResponse> {
        return AxiosIntance.get(this.BaseUrl)
    }

}