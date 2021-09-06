import AxiosIntance from '../axios/axiosInstace';

export class CtacteApi {
     BaseUrl = 'ctacte'

    getCtacte(idCuentaPersona){
        return AxiosIntance.get(`${this.BaseUrl}/${idCuentaPersona}`)
    }

    getAddMovCtacte(idCuentaPersona, movCtacte){
        return AxiosIntance.post(`${this.BaseUrl}/${idCuentaPersona}`,movCtacte)
    }

}