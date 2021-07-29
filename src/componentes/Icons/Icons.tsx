import { FC, ReactNode } from 'react'

import PrintIcon from '@material-ui/icons/Print';
import DeleteIcon from '@material-ui/icons/Delete';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import FilterListIcon from '@material-ui/icons/FilterList';
import CloseIcon from '@material-ui/icons/Close';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


interface Props {
    type?: string,
}

const Icons: FC<Props> = ({ type }) => {

    const objIcon: ReactNode = {
        null:<></>,
        quitar:<HighlightOffIcon/>,
        imprimir: <PrintIcon />,
        borrar: <DeleteIcon />,
        nuevo: <PersonAddIcon />,
        filter: <FilterListIcon />,
        close: <CloseIcon />,
        user: <AccountCircleIcon/>,
        logout: <PowerSettingsNewIcon/>,
        editar: <EditIcon/>,
        agregar:<AddIcon/>
    }

    return <> {objIcon[type as keyof Object]} </>
}


export default Icons