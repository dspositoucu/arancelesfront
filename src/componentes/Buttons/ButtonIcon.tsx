import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, createStyles, } from '@material-ui/core/styles';
import { Button } from '@material-ui/core/';

import Icons from '../Icons';

// actions
import { openModalEdit } from '../../Redux/actions/modales/ActionCreatorModals';
import { selectDataAction } from '../../Redux/actions/globalActions/ActionCreatorGlobal';

interface Props {
    endIcon?: string,
    startIcon?: string,
    label?: string,
    hover?: boolean,
    onClick?: (e?: any) => void,
    typeButton?: ("filter" | "default" | "borrar" | "nuevo")
    data?:any
}

const useStyles = makeStyles(() =>
    createStyles({
        default: {
            background: "none",
            boxShadow: "none",
            color: "#6E6893",
            textTransform: 'capitalize',
            minWidth: 'max-content'
        },
        hover: {
            '&:hover': {
                background: '#d9d5e8'
            },
        },
    }))

const ButtonIcon: FC<Props> = ({startIcon = "null", endIcon = "null", label, typeButton = "default", hover = false, data, onClick }) => {
    const dispatch = useDispatch()

    const acciones = {
        editar: () => {
            dispatch(openModalEdit());
            dispatch(selectDataAction(data))
        },
        nuevo: onClick
    }
    const classes = useStyles()
    return (
        <Button
            onClick={acciones[endIcon] || acciones[startIcon]}
            className={`${hover && classes.hover} ${classes[typeButton]}`}
            endIcon={<Icons type={endIcon} />}
            startIcon={<Icons type={startIcon} />}
        >
            {label && `${label[0].toUpperCase() + label.slice(1)}`}
        </Button>
    )
}

export default ButtonIcon