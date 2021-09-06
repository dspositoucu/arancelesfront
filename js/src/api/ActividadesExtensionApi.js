import AxiosIntance from '../axios/axiosInstace';

export class ActividadesExtensionApi {
     BaseUrl = 'cuentas/actividadesExtension'
    getActividadesExtension() {
        return AxiosIntance.get(this.BaseUrl)
    }

}