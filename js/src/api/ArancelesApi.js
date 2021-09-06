import AxiosIntance from '../axios/axiosInstace';

export class ArancelesApi {
     BaseUrl = 'aranceles'

    getAllAranceles(){
        return AxiosIntance.get(this.BaseUrl)
    }
    addAranceles(cuenta){
        return AxiosIntance.post(this.BaseUrl,cuenta)
    }


}