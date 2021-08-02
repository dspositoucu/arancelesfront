import { useEffect, useState, ChangeEvent } from "react";

const useDescripcion = () =>{

    const [descripciones, setDescripciones] = useState([
        { id: '1', descripcion: "Arancel", monto: "0.00" },
        { id: '2', descripcion: "Bonificacion", monto: "0.00" },
        { id: '3', descripcion: "Intereses", monto: "0.00" },
        { id: '4', descripcion: "Biblioteca", monto: "0.00" },
        { id: '5', descripcion: "Moratoria", monto: "0.00" },
    ])

    const [nuevaDescripcion, setNuevaDescripcion] = useState({
        descripcion: "",
        monto: "0.00",
    })

    const agregarDescripcion = () => {
        setDescripciones([
            ...descripciones,
            {
                id: (descripciones.length + 1).toString(),
                descripcion: nuevaDescripcion.descripcion,
                monto: nuevaDescripcion.monto
            }])
    }

    const quitarDescripcion = (idDesc) => {
        setDescripciones(
            descripciones.filter(desc => desc.id !== idDesc)
        )
    }

    const sumarMontos = () => {
        let monto = 0 
        descripciones.forEach(desc=>{
            monto += parseFloat(desc.monto)     
        })
        return monto
    }

    const handleChangeDesc = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target

        setNuevaDescripcion({
            ...nuevaDescripcion,
            [name]: value,
        })}


        return {
            descripciones,
            agregarDescripcion,
            quitarDescripcion,
            sumarMontos,
            handleChangeDesc,
            nuevaDescripcion
        }
}

export default useDescripcion