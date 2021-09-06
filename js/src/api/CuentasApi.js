import AxiosIntance from '../axios/axiosInstace';
export class CuentasApi {
     BaseUrl = 'cuentas'

    getAllCuentas() {
        return AxiosIntance.get(this.BaseUrl)
    }

    addCuentas(newCuenta) {
        return AxiosIntance.post(this.BaseUrl,newCuenta)
    }

    updateCuenta(idCuenta,newCuenta) {
        return AxiosIntance.put(`${this.BaseUrl}/update/${idCuenta}`,newCuenta)
    }

    getCuentasList()  {
        return AxiosIntance.get(`${this.BaseUrl}/list`)
    }

    getSedesList()  {
        return AxiosIntance.get(`${this.BaseUrl}/sedes`)
    }

    getActividadesExtension(){
        return AxiosIntance.get(`${this.BaseUrl}/actividadesExtencion`)
    }

    getTiposCuenta()  {
        return AxiosIntance.get(`${this.BaseUrl}/tiposcuenta`)
    }
}