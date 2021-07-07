import React, { FC, useState } from 'react'
import Menu from '@material-ui/core/Menu';
import ButtonHeader from '../Buttons/ButtonIcon'
import { useDispatch,useSelector } from 'react-redux'

//config
//import menuFilterData from '../../config/filterMenu.config'

//types
import { AppState } from '../../Redux/state/AppState';

//components 
import FilterMenuItems from './FilterMenuItems';

//actions
import { addFilter } from '../../Redux/actions/informes/ActionCreatorInformes'
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

interface Props { }

const FilterMenu: FC<Props> = (props) => {
    const dispatch = useDispatch()

    const menuFilterData = [
        {
            label: "Alumnos becados activos",
            action: (value:boolean) => dispatch(becadosActivos(value))
        },
        {
            label: "Alumnos dados de baja",
            action: (value:boolean) => dispatch(alumnosDadosDeBaja(value))
        },
        {
            label: "Alumnos activos",
            action: (value:boolean) => dispatch(alumnosActivos(value))
        },
        {
            label: "Alumnos acreditan banco",
            action: (value:boolean) => dispatch(alumnosAcreditanEnBanco(value))
        },
        {
            label: "Alumnos con fin de carrera",
            action: (value:boolean) => dispatch(alumnosConFinDeCarrera(value))
        },
        {
            label: "Alumnos con año de gracia",
            action: (value:boolean) => dispatch(alumnosConAñoDeGracia(value))
        },
        {
            label: "Alumnos sin cuenta",
            action: (value:boolean) => dispatch(alumnosSinCuenta(value))
        },
    ]

    const { filterTags } =  useSelector((state:AppState) => state.InformesState)

    const [checked, setChecked] = useState<any>({ checked: '' });
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleChange = (value: string) => {

        setChecked({
            ...checked,
            [value]: !checked[value]
        });
        dispatch(addFilter(value))

    };

    const menuFilterDataActions = [
        {
            Alumnos_dados_de_baja: () => dispatch(alumnosDadosDeBaja(false)),
            filter: "Alumnos_dados_de_baja"
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

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const showTags = () => {
        let arrTags = []
        for (let tag in filterTags) {
            if (filterTags[tag as keyof Object]) {
                arrTags.push(tag)
            }
        }
        return arrTags
    }

    return (
        <>
            <ButtonHeader
                iconType="filter"
                onClick={handleClick}
                label="Filtros Alumnos"
            />
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                    menuFilterData.map((menuItem,i) => {
                        let item = menuItem.label.split(' ').join('_')

                        return (
                            <FilterMenuItems
                                key={i}
                                checked={!!filterTags[item as keyof Object]}
                                label={menuItem.label}
                                item={item}
                                onClick={() => {

                                    handleChange(item);
                                    menuItem.action(!filterTags[item as keyof Object])
                                   /*  menuFilterDataActions.forEach(action => {
                                        if (action.filter === menuItem.label) {
                                           action[menuItem.label]()
                                        }
                                    }) */
                                }}
                            />
                        )
                    })
                }

            </Menu>
        </>
    )
}

export default FilterMenu