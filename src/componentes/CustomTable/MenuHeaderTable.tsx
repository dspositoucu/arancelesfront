import { FC, useState, useEffect } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Typography, Toolbar, Divider } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

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
import ButtonHeader from '../Buttons';
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

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center"
        },
        tagsMenu: {
            height: 'max-content',
            display: "flex",
            alignItems: "center",
            flexWrap: 'wrap'
        },
        titleTable: {
            color: '#6E6893',
            cursor: "pointer",
            "&:hover": {
                color: '#51488D'
            }
        }
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
        let arrTags:string[] = []
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
            <Toolbar className={classes.root}>
                {<BuilPDF />}
                <Typography
                    className={classes.titleTable}
                    variant="subtitle1"
                    onClick={() => { dispatch(globalSetTableFilterinUse(false)) }}
                >
                    Listado de Personas
                </Typography>
                {filterMenu && <FilterMenu />}

                {
                    buttonsList.map(buttonType => <Buttons key={buttonType} type={buttonType} />)
                }

                <SearchBarTable
                    functionFilter={filter}
                    filterSearchBar={filterSearchBar}
                />

            </Toolbar>

            {showTags().length
                ? <>
                    <Divider orientation="horizontal" />
                    <Toolbar className={classes.tagsMenu}>
                        {
                            showTags().map((tag) => {
                                return (
                                    <ButtonHeader
                                        key={tag}
                                        label={tag.split('_').join(' ')}
                                        iconType="close"
                                        typeButton="filter"
                                        onClick={() => {
                                            dispatch(removeFilterTag(tag));
                                         /*    menuFilterData.forEach(action => {
                                                if (action.filter === tag) {
                                                   action[tag]()
                                                }
                                            }) */
                                        }}
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