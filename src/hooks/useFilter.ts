import { ChangeEvent, useState } from 'react'

// hook para filtrar los datos de una tabla de una columna en especifico 

export const useFilter = <T extends Object[]>(tableData: T) => {
   
    const [dataFilter, setDataFilter] = useState<Object[]>(tableData)
    const [tableFilterinUse, setTableFilterinUse] = useState<boolean>(false)

    // funcion filtradora que recive el evento y la culumna a filtrar, setea el estado con la nueva lista
    const handleFilter = ({ target }: ChangeEvent<HTMLInputElement>, filterColumn: string): void => {
        if (!tableData.length) return
        let dataSearch = target.value;
        console.log( "Busqueda: ",dataSearch.length)
        let resultFilter = tableData.filter(data => {
            let per = data[filterColumn as keyof Object]?.toString().toLowerCase()
            return per?.includes(dataSearch.toLowerCase())
        });
        setDataFilter(resultFilter)
        target.value.length ? setTableFilterinUse(true) : setTableFilterinUse(false)  
    }

    return { dataFilter, handleFilter, tableFilterinUse}

}
