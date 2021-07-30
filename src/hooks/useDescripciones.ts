import { useEffect, useState, ChangeEvent } from 'react';

const useDescripciones = <T>() => {

    const [descripciones, setDescripciones] = useState({
        Aranceles: "0.00",
        Bonificacion: "0.00",
        Intereses: "0.00",
        Biblioteca: "0.00",
        Moratoria: "0.00"
    }
)
    const [nuevaDescripcion, setNuevaDescripcion] = useState(
        {descripcion:""}
    )

    const generarListaDescripciones = () =>{
       return Object.keys(descripciones).map(desc=>{return {descripcion:desc,monto:descripciones[desc]}})
    }

    const [listaDescripciones,setListaDescripciones] = useState(generarListaDescripciones())

    const agregarDescripcion = () => {

        const {descripcion} = nuevaDescripcion 
        setDescripciones( Object.assign(descripciones,{[descripcion]:"0.00"}))
        setListaDescripciones(generarListaDescripciones())
    }

    const quitarDescripcion = (key) => {
        console.log(listaDescripciones,key)
        setListaDescripciones(listaDescripciones.filter(desc=> desc.descripcion!==key)) 
    }

    const sumarMontos = () => {
        let monto = 0
        for(let key in descripciones) {
            monto +=parseFloat(descripciones[key]) 
        }
        return monto
    }


    const handleChangeNuevaDesc = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target

        setNuevaDescripcion({
            ...nuevaDescripcion,
            [name]:value
        })
    }

    const handleChangeDesc = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target
        console.log("valores ", name, value)
        setDescripciones({
            ...descripciones,
            [name]: !value ? "0.00" : value
        })
    }

    return {
        listaDescripciones,
        nuevaDescripcion,
        handleChangeDesc,
        handleChangeNuevaDesc,
        agregarDescripcion,
        quitarDescripcion,
        monto: sumarMontos()
    }
}

export default useDescripciones