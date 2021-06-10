import React, { FC, ReactNode } from 'react'
import { makeStyles, Theme, createStyles, } from '@material-ui/core/styles';
import { Button } from '@material-ui/core/';


interface Props {
    icon?:ReactNode,
    label?:string,
    onClick?:any
}

const useStyles = makeStyles( (theme: Theme) =>
    createStyles({
        root:{
            background: "none",
            boxShadow:"none",
            color:"#6E6893",
            '&:hover':{
                background:'#F2F0F9'
            },
            textTransform: 'capitalize',
        }
    }))

const ButtonHeader:FC<Props> = ({ onClick, icon, label }) => {
    const classes = useStyles()

  return (
    <Button 
        onClick={onClick}
        className={classes.root}
        startIcon={icon}
    >
        {label}
    </Button>
   )
 }

export default ButtonHeader