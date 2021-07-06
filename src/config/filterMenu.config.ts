//actions
import {
    becadosActivos,
    alumnosActivos,
    alumnosDadosDeBaja,
    alumnosConCBU,
    alumnosSinCBU,
    alumnosConFinDeCarrera,
    alumnosConAñoDeGracia,
    alumnosAcreditanEnBanco,
    alumnosSinCuenta
} from '../Redux/actions/informes/ActionCreatorInformes'

import { useDispatch } from 'react-redux'
const menuFilterData = [
    {
        label: "Alumnos becados activos",
        action: () => { }
    },
    {
        label: "Alumnos dados de baja",
        action: () => { }
    },
    {
        label: "Alumnos activos",
        action: () => { }
    },
    {
        label: "Alumnos acreditan banco",
        action: () => { }
    },
    {
        label: "Alumnos con fin de carrera",
        action: () => { }
    },
    {
        label: "Alumnos con año de gracia",
        action: () => { }
    },
    {
        label: "Alumnos sin cuenta",
        action: () => { }
    },
]

export default menuFilterData