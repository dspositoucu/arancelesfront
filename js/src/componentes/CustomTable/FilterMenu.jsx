import { useState } from 'react'
import Menu from '@material-ui/core/Menu';
import ButtonHeader from '../Buttons/ButtonIcon'
import { useDispatch, useSelector } from 'react-redux'

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


const FilterMenu = (props) => {
    const dispatch = useDispatch()

    const menuFilterData = [
        {
            label: "Alumnos becados activos",
            action: (value) => dispatch(becadosActivos(value))
        },
        {
            label: "Alumnos dados de baja",
            action: (value) => dispatch(alumnosDadosDeBaja(value))
        },
        {
            label: "Alumnos activos",
            action: (value) => dispatch(alumnosActivos(value))
        },
        {
            label: "Alumnos acreditan banco",
            action: (value) => dispatch(alumnosAcreditanEnBanco(value))
        },
        {
            label: "Alumnos con fin de carrera",
            action: (value) => dispatch(alumnosConFinDeCarrera(value))
        },
        {
            label: "Alumnos con año de gracia",
            action: (value) => dispatch(alumnosConAñoDeGracia(value))
        },
        {
            label: "Alumnos sin cuenta",
            action: (value) => dispatch(alumnosSinCuenta(value))
        },
    ]

    const { filterTags } = useSelector((state) => state.InformesState)

    const [checked, setChecked] = useState({ checked: '' });
    const [anchorEl, setAnchorEl] = useState(null);

    const handleChange = (value) => {

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

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    /*  const showTags = () => {
         let arrTags:string[] = []
         for (let tag in filterTags) {
             if (filterTags[tag as keyof Object]) {
                 arrTags.push(tag)
             }
         }
         return arrTags
     } */

    return (
        <>
            <ButtonHeader
                endIcon="filter"
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
                    menuFilterData.map((menuItem, i) => {
                        let item = menuItem.label.split(' ').join('_')

                        return (
                            <FilterMenuItems
                                key={i}
                                checked={!!filterTags[item]}
                                label={menuItem.label}
                                item={item}
                                onClick={() => {

                                    handleChange(item);
                                    menuItem.action(!filterTags[item])
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