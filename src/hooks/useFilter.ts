import { ChangeEvent, useState } from 'react'

// hook para filtrar los datos de una tabla de una columna en especifico 


export const useFilter = <T extends Object[]>(tableData: T) => {
   
    const [dataFilter, setDataFilter] = useState<Object[]>(tableData)

    // funcion filtradora que recive el evento y la culumna a filtrar, setea el estado con la nueva lista
    const handleFilter = ({ target }: ChangeEvent<HTMLInputElement>, filterColumn: string): void => {
        if (!tableData.length) return
        let dataSearch = target.value;
        let resultFilter = tableData.filter(data => {
            let per = data[filterColumn as keyof Object]?.toString().toLowerCase()
            return per?.includes(dataSearch.toLowerCase())
        });
        setDataFilter(resultFilter);
    }

    return { dataFilter, handleFilter }

}
