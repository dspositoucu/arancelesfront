import AxiosIntance from '../axios/axiosInstace';

export class AlumnosSao {
     BaseUrl = 'sao_personas'
    getNuevosAlumnosSao(){
        return AxiosIntance.get(this.BaseUrl)
    }

}