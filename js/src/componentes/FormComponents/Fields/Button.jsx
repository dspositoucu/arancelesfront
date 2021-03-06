import React from 'react'
import { Button as MuiButton, Typography, } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            margin: theme.spacing(0.5),
            [theme.breakpoints.down("lg")]: {
                minWidth: 32,
                padding: theme.spacing(1,2),
                margin: theme.spacing(0.8),
                fontSize:12,
                borderRadius:theme.spacing(1)
            }
        },
        label: {
            textTransform: 'none'
        },
        primary: {
            background: '#f50057',
            color: '#FFF',
            '&:hover': {
                background: '#f36c9c'
            }
        },
        secondary: {
            background: 'transparent',
            color: '#f50057',
            border: 'solid 1px #f50057',
            '&:hover': {
                background: '#f36c9c'
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
            <Typography variant="body1">{text}</Typography>
        </MuiButton>
    )
}