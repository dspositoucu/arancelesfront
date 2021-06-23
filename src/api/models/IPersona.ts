export default interface IPersona {
    id: number | string;
    nombre: string;
    ndoc: string;
    telefono: string;
    email: string;
    domicilio: string;
    sexo?: string;
    fecnac?: Date;
    cuit: string;
    tipodoc?: number;
    codigo?: string;
    idperaul?: string
    beneficio?: number;
    baja?: boolean
}