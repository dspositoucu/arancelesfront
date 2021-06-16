import { FC, ReactNode } from 'react';
import { makeStyles, createStyles, } from '@material-ui/core/styles';
import { Button } from '@material-ui/core/';

import Icons from '../Icons';

// actions

interface Props {
    iconType?:string,
    label?:string,
    onClick?: (e?:any) => void
}

const useStyles = makeStyles( () =>
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

const ButtonHeader:FC<Props> = ({onClick, iconType="imprimir", label, }) => {
    const classes = useStyles()

  return (
    <Button 
        onClick={onClick}
        className={classes.root}
        startIcon={<Icons type={iconType}/>}
    >
        {label && `${label[0].toUpperCase()+label.slice(1)}`}
    </Button>
   )
 }

export default ButtonHeader