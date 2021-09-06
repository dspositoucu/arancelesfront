import AxiosIntance from '../axios/axiosInstace';

export class BarridasApi {
     BaseUrl = 'barridas'

    getAllBarridas() {
        return AxiosIntance.get(this.BaseUrl)
    }

    addBarridas(newBarrida) {
        return AxiosIntance.post(this.BaseUrl, newBarrida)
    }

    getAllGruposBarridas() {
        return AxiosIntance.get(`${this.BaseUrl}`)
    }

    getListaGruposBarrida() {
        return AxiosIntance.get(`${this.BaseUrl}/gruposbarridas`)
    }

}