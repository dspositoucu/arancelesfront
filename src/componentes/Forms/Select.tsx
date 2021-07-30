import React from 'react'
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
createStyles({
    selectProps:{
        height:200
    }

}));

 const Select = (props) => {
    const { name, label, value,error=null, onChange, options, firstValue="default" } = props
    const classes = useStyles();
    return (
        <FormControl variant="outlined"
        {...(error && {error:true})}>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                {...props}
                label={label}
                name={name}
                value={value}
                MenuProps={{
                    style: { zIndex: 900001 },
                    disableScrollLock: false,
                    classes:{paper:classes.selectProps}
                }}
                onChange={onChange}>
                    <MenuItem value="">{firstValue}</MenuItem>
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

export default Select