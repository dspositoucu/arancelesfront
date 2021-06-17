import React, { FC, useState } from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import ButtonHeader from '../Buttons/ButtonHeader'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux'


//components 
import FilterMenuItems from './FilterMenuItems';

//actions
import { addFilter } from '../../Redux/actions/ActionCreator'
interface Props { }


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

const FilterMenu: FC<Props> = (props) => {
    const dispatch = useDispatch()
    //const { filterButtons } =  useSelector((state:AppState) => state.PersonState)

    const classes = useStyles();
    const [checked, setChecked] = useState<any>({ checked: '' });
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleChange = (value: string) => {

        setChecked({
            ...checked,
            [value]: !checked[value]
        });
        dispatch(addFilter(value))

    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <ButtonHeader
                iconType="filter"
                onClick={handleClick}
                label="Filtros"
            />
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >

                <MenuItem
                    className={classes.menuitemCheck}
                    onClick={() => handleChange("alumnos_becados_activos")}

                >
                    Alumnos becados activos
                    <Checkbox
                        className={classes.root}
                        checked={checked["alumnos_becados_activos"] || false}
                        color="default"
                    />
                </MenuItem>
                <MenuItem
                    className={classes.menuitemCheck}
                    onClick={() => handleChange("alumnos_dados_de_baja")}
                >
                    Alumnos dados de baja
                    <Checkbox
                        className={classes.root}
                        checked={checked["alumnos_dados_de_baja"] || false}
                        color="default"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </MenuItem>
                <MenuItem
                    className={classes.menuitemCheck}
                    onClick={() => handleChange("alumnos_activos")}
                >
                    Alumnos activos
                    <Checkbox
                        className={classes.root}
                        checked={checked["alumnos_activos"] || false}
                        color="default"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </MenuItem>
                <MenuItem
                    className={classes.menuitemCheck}
                    onClick={() => handleChange("alumnos_acreditan_banco")}
                >
                    Alumnos acreditan banco
                    <Checkbox
                        className={classes.root}
                        checked={checked["alumnos_acreditan_banco"] || false}
                        color="default"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </MenuItem>
                <MenuItem
                    className={classes.menuitemCheck}
                    onClick={() => handleChange("alumnos_con_fin_de_carrera")}
                >
                    Alumnos con fin de carrera
                    <Checkbox
                        className={classes.root}
                        checked={checked["alumnos_con_fin_de_carrera"] || false}
                        color="default"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </MenuItem>
                <MenuItem
                    className={classes.menuitemCheck}
                    onClick={() => handleChange("alumnos_con_año_de_gracia")}
                >
                    Alumnos con año de gracia
                    <Checkbox
                        className={classes.root}
                        checked={checked["alumnos_con_año_de_gracia"] || false}
                        color="default"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </MenuItem>
                <MenuItem
                    className={classes.menuitemCheck}
                    onClick={() => handleChange("alumnos_sin_cuenta")}
                >
                    Alumnos sin cuenta
                    <Checkbox
                        className={classes.root}
                        checked={checked["alumnos_sin_cuenta"] || false}
                        color="default"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </MenuItem>
            </Menu>
        </>
    )
}

export default FilterMenu