import React from 'react'
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


//

export default function Select({ name, label, value,error=null, onChange, options }) {
    const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        selectProps:{
            height:200
        }

    }));
    const classes = useStyles();
    return (
        
        <FormControl variant="outlined"
        {...(error && {error:true})}>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                label={label}
                name={name}
                value={value}
                MenuProps={{
                    style: { zIndex: 900001 },
                    disableScrollLock: false,
                    classes:{paper:classes.selectProps}
                }}
                onChange={onChange}>
                    
                <MenuItem value="">SIN CUENTA-00</MenuItem>
                {
                    options.map(
                        item => (<MenuItem key={item} value={item}>{item}</MenuItem>)
                    )
                }
            </MuiSelect>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}