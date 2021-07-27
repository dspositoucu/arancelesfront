import { AxiosResponse } from 'axios'
import AxiosIntance from '../../axios/axiosInstace';
import { IPersona } from '../../models';


export class PersonApi {
    private BaseUrl = 'persona'

    getAllPersonas(): Promise<AxiosResponse> {
        return AxiosIntance.get(this.BaseUrl)
    }

    addPersona(persona: IPersona): Promise<AxiosResponse> {
        return AxiosIntance.post(this.BaseUrl, persona)
    }

    getCuentasByPersonaId(personaId): Promise<AxiosResponse> {
        return AxiosIntance.get(`${this.BaseUrl}/cuentas/${personaId.toString()}`)
    }

 /*    deletePerson(personaList: IPersona[]): Promise<AxiosResponse> {
        return AxiosIntance.delete(this.BaseUrl, personaList)
    } */


}