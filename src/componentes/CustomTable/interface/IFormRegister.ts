interface IFieldsForm {
    label:string,
    type?:string,
    name?:string
}

export default interface IFormRegister {
    titleForm?:string | 'Titulo Registro',
    buttonSubmitLabel?:string | 'Boton ',
    fields:IFieldsForm[]
}