import React from 'react'
import { useField } from 'formik';
import Warning from './Warning';
import { TextField } from '@material-ui/core';

export default function Input(props) {
    const {
        name,
        label,
        required = false,
        warning = '',
        readOnly = false,
        multiline = false
    } = props;

    const [field, { error }] = useField(name);

    return (
        <div style={{display:'flex'}}>
            <Warning text={warning} />
            <TextField
                {...props}
                error={!!error}
                helperText={error}
                required={required}
                onChange={field.onChange}
                onBlur={field.onBlur}
                style={{flexGrow:1, margin:"none"}}
                value={field.value || ''}
                multiline={multiline}
                variant={readOnly ? "filled" : "outlined"}
                InputLabelProps={!label ? { shrink: false } : {}}
                size="small"
                InputProps={{
                    readOnly
                }}
            />
        </div>
    )
}