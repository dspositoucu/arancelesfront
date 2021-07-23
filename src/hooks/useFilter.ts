import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent } from 'react';
import { typesModels, IInformes, IPersona } from '../models'

//actions
import { globalSetFilterList, globalSetTableFilterinUse } from '../Redux/actions/globalActions/ActionCreatorGlobal'

import { AppState } from '../Redux/state/AppState';
// hook para filtrar los datos de una tabla de una columna en especifico 

export const useFilter = <T extends typesModels[] & IInformes[] & IPersona[]>(tableData: T) => {
    const dispatch = useDispatch()
    const { filterList, tableFilterinUse } = useSelector((state: AppState) => state.GlobalState)

    // funcion filtradora que recive el evento y la culumna a filtrar, setea el estado con la nueva lista
    const handleFilter = ({ target }: ChangeEvent<HTMLInputElement>, filterColumn: string): void => {
        
        if (!tableData.length) return

        let dataSearch = target.value;
        let resultFilter = tableData.filter(data => {
            let per = ((data[filterColumn.toLowerCase() as keyof Object]) // SE COMPRUEBA SI LOS NOMBRES DE LAS COLUMNAS ESTAN EN MAYUSCULAS O MINUSCULAS
                ? (!!(data[filterColumn.toLowerCase() as keyof Object]) && (data[filterColumn.toLowerCase() as keyof Object]))                   
                : (!!(data[filterColumn.toUpperCase() as keyof Object]) && (data[filterColumn.toUpperCase() as keyof Object]))
                ).toString().toLowerCase()
            return per.includes(dataSearch.toLowerCase())
        });

        dispatch(globalSetFilterList(resultFilter))

        target.value.length ? dispatch(globalSetTableFilterinUse(true)) : dispatch(globalSetTableFilterinUse(false))
    }

    return { filterList, handleFilter, tableFilterinUse }

}
