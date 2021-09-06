import AxiosIntance from '../axios/axiosInstace';
export class UsuarioApi {
     BaseUrl = 'auth/login'

    login(user){
        return AxiosIntance.post(this.BaseUrl, user)
    }

    getAllUsuarios(){
        return AxiosIntance.get('usuario/getAllusuarios')
    }
}