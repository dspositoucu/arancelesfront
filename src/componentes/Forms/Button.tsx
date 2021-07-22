import React from 'react'
import { Button as MuiButton, makeStyles } from "@material-ui/core";



const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(0.5)
    },
    label: {
        textTransform: 'none'
    },
    primary: {
        background:'#f50057',
        color: '#FFF',
        '&:hover':{
            background:'#f36c9c'
        }
    },
    secondary: {
        background: 'transparent',
        color: '#f50057',
        border:'solid 1px #f50057',
        '&:hover':{
            background:'#f36c9c'
        }
    }
}))
export default function Button(props) {

    const { text, size, onClick, variant, ...other } = props
    const classes = useStyles();

    return (
        <MuiButton
            className={classes[variant]}
            size={size || "large"}
            onClick={onClick}
            {...other}
            classes={{ root: classes.root, label: classes.label }}>
            {text}
        </MuiButton>
    )
}