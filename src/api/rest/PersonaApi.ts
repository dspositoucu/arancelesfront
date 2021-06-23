import axios, { AxiosResponse } from 'axios'

import IPersona from "../models/IPersona";

export class PersonApi {
    private BaseUrl = 'http://localhost:3000/api/v1/persona'
    private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibHVjaGkiLCJpYXQiOjE2MjQ0Njc0NTAsImV4cCI6MTYyNDY4MzQ1MH0.mvD2Okab0bAm5Ub1RgN-vnhiXLElIUeOZI7HE5uEEPE'
    private headerAuth = {
        headers:{
            'Authorization': `Bearer ${this.token}`
        }
    }

    getAllPersonas(): Promise<AxiosResponse> {
        return axios.get(this.BaseUrl,this.headerAuth)
    }
}