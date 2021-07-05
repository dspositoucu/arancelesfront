import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent, useState } from 'react';
import { typesModels, IInformes, IPersona } from '../models'

//actions
import { setFilterList, setTableFilterinUse } from '../Redux/actions/personas/ActionCreator'

import { AppState } from '../Redux/state/AppState';
// hook para filtrar los datos de una tabla de una columna en especifico 

export const useFilter = <T extends typesModels[] & IInformes[] & IPersona[] >(tableData: T) => {
    const dispatch = useDispatch()
    const { filterList, tableFilterinUse } = useSelector((state :AppState)=> state.PersonState )

    // funcion filtradora que recive el evento y la culumna a filtrar, setea el estado con la nueva lista
    const handleFilter = ({ target }: ChangeEvent<HTMLInputElement>, filterColumn: string): void => {
        if (!tableData.length) return
        let dataSearch = target.value;
        console.log( "Busqueda: ",dataSearch)

        let resultFilter = tableData.filter(data => {
            let per = data[filterColumn as keyof Object]?.toString().toLowerCase()
            return per?.includes(dataSearch.toLowerCase())
        });
        
        dispatch(setFilterList(resultFilter))
    
        target.value.length ? dispatch(setTableFilterinUse(true)) : dispatch(setTableFilterinUse(false))  
    }

    return { filterList, handleFilter, tableFilterinUse}

}
