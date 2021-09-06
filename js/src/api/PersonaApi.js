import AxiosIntance from '../axios/axiosInstace';

export class PersonaApi {
     BaseUrl = 'persona'

    getAllPersonas(){
        return AxiosIntance.get(this.BaseUrl)
    }

    addPersona(persona){
        return AxiosIntance.post(this.BaseUrl, persona)
    }

    getCuentasByPersonaId(personaId) {
        return AxiosIntance.get(`${this.BaseUrl}/cuentas/${personaId.toString()}`)
    }

    getAllGeneros(){
        return AxiosIntance.get(`${this.BaseUrl}/generos/all`)
    }

 /*    deletePerson(personaList: IPersona[]): Promise<AxiosResponse> {
        return AxiosIntance.delete(this.BaseUrl, personaList)
    } */


}