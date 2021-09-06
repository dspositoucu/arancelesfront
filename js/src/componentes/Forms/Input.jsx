import React from 'react'
import { TextField } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
            width: '100%',
        },
    }));

export default function Input(props) {

    const classes = useStyles()

    const { name, label, value, error = null, onChange, type, InputLabelProps, verySmall = false } = props;
    return (
        <div className={classes.root}>
            <TextField
                InputLabelProps={{InputLabelProps}}
                type={type}
                variant="outlined"
                label={label}
                name={name}
                value={value}
                onChange={onChange}
                size="small"
                {...props}
                {...(error && { error: true, helperText: error })}
            />
        </div>
    )
}