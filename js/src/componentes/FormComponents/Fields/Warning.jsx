import ErrorIcon from '@material-ui/icons/Error';
import { Tooltip, IconButton } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import React, { FC } from 'react'

const useStyles = makeStyles((theme) =>
    createStyles({
        iconButton: {
            padding: theme.spacing(1),
        },

        inputContainer:{
            display:'flex',
            alignItems:'center'
        }
    })
)

const Warning = ({ text = "" }) => {
    const classes = useStyles()
    const upperText = (typeof text === "string") && text.toUpperCase();

    return (
        <span className={classes.inputContainer}>
            {
                upperText
                    ? <Tooltip title={upperText}>
                        <IconButton
                            classes={{
                                root:classes.iconButton
                            }}
                            aria-label={upperText}
                        >
                            <ErrorIcon />
                        </IconButton>
                    </Tooltip>
                    : null
            }
        </span>
    )
}
export default Warning