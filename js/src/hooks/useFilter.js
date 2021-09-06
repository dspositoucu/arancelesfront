import { useDispatch, useSelector } from 'react-redux';
//actions
import { globalSetFilterList, globalSetTableFilterinUse } from '../Redux/actions/globalActions/ActionCreatorGlobal'

// hook para filtrar los datos de una tabla de una columna en especifico 
export const useFilter = (tableData) => {
    const dispatch = useDispatch()
    const { filterList, tableFilterinUse } = useSelector((state) => state.GlobalState)

    // funcion filtradora que recive el evento y la culumna a filtrar, setea el estado con la nueva lista
    const handleFilter = ({ target }, filterColumn) => {
        
        if (!tableData.length) return

        let dataSearch = target.value;
        let resultFilter = tableData.filter(data => {
            let per = ((data[filterColumn.toLowerCase()]) // SE COMPRUEBA SI LOS NOMBRES DE LAS COLUMNAS ESTAN EN MAYUSCULAS O MINUSCULAS
                ? (!!(data[filterColumn.toLowerCase()]) && (data[filterColumn.toLowerCase()]))                   
                : (!!(data[filterColumn.toUpperCase()]) && (data[filterColumn.toUpperCase()]))
                ).toString().toLowerCase()
            return per.includes(dataSearch.toLowerCase())
        });

        dispatch(globalSetFilterList(resultFilter))

        target.value.length ? dispatch(globalSetTableFilterinUse(true)) : dispatch(globalSetTableFilterinUse(false))
    }

    return { filterList, handleFilter, tableFilterinUse }

}
