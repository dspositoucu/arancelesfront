import AxiosIntance from '../axios/axiosInstace';

export class InformesApi {
     BaseUrl = 'informes'
     
    getAllDataInformes(){
        return AxiosIntance.get(this.BaseUrl)
    }


}