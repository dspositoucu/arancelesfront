import { FC } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
    createStyles({
        menuitemCheck: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            color: '#6E6893',
            textTransform: 'capitalize',
        },
        root: {
            color: '#6E6893',
        }
    }))

const FilterMenuItems = ({ item, checked=false, label, onClick=()=>{} }) => {
    const classes = useStyles();

    return (
    <MenuItem
        className={classes.menuitemCheck}
        onClick={() =>{onClick(item)}}
    >
        {label}
        <Checkbox
            className={classes.root}
            checked={checked}
            color="default"
            inputProps={{ 'aria-label': 'primary checkbox' }}
        />
    </MenuItem>
    )
}

export default FilterMenuItems
