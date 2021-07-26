import { FC, useState, useEffect } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Typography, Toolbar, Divider } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Chip from '@material-ui/core/Chip';
//example pdf
import BuilPDF from '../../helpers/buildTablePdf'

//types
import { AppState } from '../../Redux/state/AppState';

//actions
import { removeFilterTag } from '../../Redux/actions/informes/ActionCreatorInformes'
import { globalSetTableFilterinUse } from '../../Redux/actions/globalActions/ActionCreatorGlobal';

//interface
import IFilterSearchBar from '../CustomTable/interface/IFilterSearchBar'

//component 
import SearchBarTable from './SearchBarTable';
import FilterMenu from '../CustomTable/FilterMenu';

// list button
import Buttons from '../Buttons/ButtonListHeaderTable'

import {
    becadosActivos,
    alumnosActivos,
    alumnosDadosDeBaja,
    alumnosConFinDeCarrera,
    alumnosConAñoDeGracia,
    alumnosAcreditanEnBanco,
    alumnosSinCuenta,
    unfiltered
} from '../../Redux/actions/informes/ActionCreatorInformes'

interface Props {
    filter?: any,
    buttonsList: string[],
    filterSearchBar?: IFilterSearchBar[]
    filterMenu: boolean
}

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 10px 0px 10px",
            height: 50,
        },
        tagsMenu: {
            maxHeight: 'max-content',
            minHeight: 40,
            padding: "10px 10px 0px 10px",
            display: "flex",
            alignItems: "center",
            flexWrap: 'wrap'
        },
        chip: {
            margin: theme.spacing(0.5),
            borderRadius:5,
            color:'#6c74fa',
            background: '#dee2fe',
            border: 'solid 1px #f3f4fb',
            '& .MuiChip-deleteIcon':{
                color:'#6c74fa'
            },
            '&:focus':{
                background:'#dee2fe'
            }
        },
    }))

const MenuHeaderTable: FC<Props> = ({ filter, buttonsList, filterSearchBar, filterMenu }) => {

    const menuFilterData = [
        {
            Alumnos_dados_de_baja: () => dispatch(alumnosDadosDeBaja(false)),
            filter: "Alumnos_dados_de_baja",
        },

        {
            Alumnos_becados_activos: () => dispatch(becadosActivos(false)),
            filter: "Alumnos_becados_activos"
        },

        {
            Alumnos_activos: () => dispatch(alumnosActivos(false)),
            filter: "Alumnos_activos"
        },

        {
            Alumnos_acreditan_banco: () => dispatch(alumnosAcreditanEnBanco(false)),
            filter: "Alumnos_acreditan_banco"
        },

        {
            Alumnos_con_fin_de_carrera: () => dispatch(alumnosConFinDeCarrera(false)),
            filter: "Alumnos_con_fin_de_carrera"
        },

        {
            Alumnos_con_año_de_gracia: () => dispatch(alumnosConAñoDeGracia(false)),
            filter: "Alumnos_con_año_de_gracia"
        },

        {
            Alumnos_sin_cuenta: () => dispatch(alumnosSinCuenta(false)),
            filter: "Alumnos_sin_cuenta"
        },
    ]


    const dispatch = useDispatch()
    const { filterTags } = useSelector((state: AppState) => state.InformesState)

    const showTags = () => {
        let arrTags: string[] = []
        for (let tag in filterTags) {
            if (filterTags[tag as keyof Object]) {
                arrTags.push(tag)
            }
        }
        return arrTags
    }

    const classes = useStyles()
    return (
        <>
            <div className={classes.root}>
                <SearchBarTable
                    functionFilter={filter}
                    filterSearchBar={filterSearchBar}
                />
                {filterMenu && <FilterMenu />}

                {
                    buttonsList.map(buttonType => <Buttons key={buttonType} type={buttonType} />)
                }


            </div>

            {showTags().length
                ? <>
                    <Toolbar className={`${classes.tagsMenu}`}>
                        {
                            showTags().map((tag) => {
                                return (
                                    <Chip
                                        className={`${classes.chip} slideIn`}
                                        key={tag}
                                        label={tag.split('_').join(' ')}
                                        onDelete={() => dispatch(removeFilterTag(tag))}
                                    />
                                )
                            })
                        }
                    </Toolbar>
                </>
                : null
            }
        </>

    )
}
export default MenuHeaderTable