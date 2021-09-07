import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, createStyles, } from '@material-ui/core/styles';
import { Button } from '@material-ui/core/';
import PropTypes from 'prop-types'; 

import Icons from '../Icons';

// actions
import { openModalEdit } from '../../Redux/actions/modales/ActionCreatorModals';
import { selectDataAction } from '../../Redux/actions/globalActions/ActionCreatorGlobal';

const propTypes = {
    endIcon: PropTypes.string,
    startIcon: PropTypes.string,
    label: PropTypes.string,
    hover: PropTypes.bool,
    onClick:PropTypes.func,
    typeButton: PropTypes.string,
    centerIcon:PropTypes.string
}

const useStyles = makeStyles(() =>
    createStyles({
        default: {
            background: "none",
            boxShadow: "none",
            color: "#6E6893",
            textTransform: 'capitalize',
            minWidth: 'max-content',
            paddingLeft: 8,
            paddingRight: 8,
        },
        hover: {
            '&:hover': {
                background: '#d9d5e8'
            },
        },
    }))

const ButtonIcon = ({ 
    centerIcon='null' , 
    startIcon = "null", 
    endIcon = "null", 
    label, typeButton = "default", 
    hover = false, 
    data=null, 
    onClick,
    textAlign="", 
    width='auto',
    ...other }) => {
    const dispatch = useDispatch()

    const acciones = {
        editar: () => {
            dispatch(openModalEdit());
            dispatch(selectDataAction(data))
        },
        nuevo: onClick,
        recibo: onClick,
        ctacte: onClick,
    }
    const classes = useStyles()
    return (
        <Button
            style={{width:`${width}`, display:'flex', justifyContent:`${textAlign==='right'? 'flex-end' : textAlign==='left' ? 'flex-start' : 'center'}`}}
            onClick={acciones[endIcon] || acciones[startIcon] || onClick}
            className={`${hover && classes.hover} ${classes[typeButton]}`}
            endIcon={<Icons type={endIcon} />}
            startIcon={<Icons type={startIcon} />}
        >
            {!other.children && (label ? `${label[0].toUpperCase() + label.slice(1)}`:<Icons type={centerIcon}/>)}
            {other.children && other.children}
        </Button>
    )
}

ButtonIcon.propTypes = propTypes

export default ButtonIcon