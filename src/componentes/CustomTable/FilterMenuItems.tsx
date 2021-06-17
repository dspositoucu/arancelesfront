import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() =>
    createStyles({
        menuitemCheck: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            color: '#6E6893'
        },
        root: {
            color: '#6E6893',
        }
    }))


function FilterMenuItems() {
    const classes = useStyles();


    return (
    <MenuItem
        className={classes.menuitemCheck}
        onClick={() =>{}}
    >
        Alumnos dados de baja
        <Checkbox
            className={classes.root}
            checked={false}
            color="default"
            inputProps={{ 'aria-label': 'primary checkbox' }}
        />
    </MenuItem>
    )
}

export default FilterMenuItems
