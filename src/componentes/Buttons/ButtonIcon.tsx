import { FC, useState } from 'react';
import { makeStyles, createStyles, } from '@material-ui/core/styles';
import { Button } from '@material-ui/core/';

import Icons from '../Icons';

// actions

interface Props {
    iconType?:string,
    label?:string,
    hover?:boolean,
    onClick?: (e?:any) => void,
    typeButton?: ("filter" | "default")
}

const useStyles = makeStyles( () =>
    createStyles({
        default:{
            background: "none",
            boxShadow:"none",
            color:"#6E6893",
            textTransform: 'capitalize',
        },
        hover:{
            '&:hover':{
                background:'#d9d5e8'
            },
        },
        filter:{
            margin: 3,
            fontSize:12,
            background:'#F2F0F9',
            boxShadow:"none",
            color:"#6E6893",
            textTransform: 'capitalize',
        }
    }))

const ButtonIcon:FC<Props> = ({onClick, iconType="imprimir", label, typeButton="default", hover=true }) => {

    const classes = useStyles()

  return (
    <Button 
        onClick={onClick}
        className={`${ hover && classes.hover} ${classes[typeButton]}`}
        endIcon={<Icons type={iconType}/>}
    >
        {label && `${label[0].toUpperCase()+label.slice(1)}`}
    </Button>
   )
 }

export default ButtonIcon