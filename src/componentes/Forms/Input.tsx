import React from 'react'
import { TextField } from '@material-ui/core';

export default function Input(props) {

    const { name, label, value, error = null, onChange, type, InputLabelProps } = props;
    return (
        <TextField
            InputLabelProps={InputLabelProps}
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
    )
}