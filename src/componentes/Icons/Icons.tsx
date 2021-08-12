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
import ReceiptIcon from '@material-ui/icons/Receipt';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

interface Props {
    type?: string,
    color?: string,
    size?: string
}

const Icons: FC<Props> = (props) => {
    const { type, color='action', size='small' } = props

    const objIcon: ReactNode = {
        null: <></>,
        recibo: <ReceiptIcon fontSize="small" />,
        quitar: <HighlightOffIcon fontSize="small" />,
        imprimir: <PrintIcon fontSize="small" />,
        borrar: <DeleteIcon fontSize="small" />,
        nuevo: <PersonAddIcon fontSize="small" />,
        filter: <FilterListIcon fontSize="small" />,
        close: <CloseIcon fontSize="small" />,
        user: <AccountCircleIcon fontSize="small" />,
        logout: <PowerSettingsNewIcon fontSize="small" />,
        editar: <EditIcon fontSize="small" />,
        agregar: <AddIcon fontSize="small" />,
        ctacte: <AccountBalanceWalletIcon fontSize="small" />,
        cerrar: <HighlightOffIcon fontSize="small" />
    }

    return <> {objIcon[type as keyof Object]} </>
}


export default Icons