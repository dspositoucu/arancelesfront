import { FC } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Typography, Toolbar, Divider } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
//types
import { AppState } from '../../Redux/state/AppState';
//actions
import { deletePerson, setTableFilterinUse } from '../../Redux/actions/ActionCreator'

//component 
import ButtonHeader from '../Buttons';
import SearchBarTable from './SearchBarTable';
import FilterMenu from '../CustomTable/FilterMenu';

interface Props {
    filter?: any,
    buttonsList: string[]
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            height: 50,
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center"
        },
        titleTable: {
            color: '#6E6893',
            cursor: "pointer",
            "&:hover":{
                color:'#51488D'
            }
        }
    }))


const MenuHeaderTable: FC<Props> = ({ filter, buttonsList }) => {
    const history = useHistory()
    const dispatch = useDispatch()
    //const { filterOptions } = useSelector( (state:AppState) => state.PersonState )

    const buttons = {
        imprimir: <ButtonHeader
            label="Imprimir"
            iconType="imprimir"
        />,

        nuevo: <ButtonHeader
            label="Nuevo"
            iconType="nuevo"
            onClick={() => history.push("/addPerson")}
        />,

        borrar: <ButtonHeader
            label="Borrar"
            iconType="close"
            onClick={() => { dispatch(deletePerson()) }}
        />
    }

    const classes = useStyles()
    return (
        <>
        <Toolbar className={classes.root}>
            <Typography
                className={classes.titleTable}
                variant="subtitle1"
                onClick={()=>{dispatch(setTableFilterinUse(false))}}
            >
                Listado de Personas
            </Typography>
            <FilterMenu />

            {
                buttonsList.map(buttonType => { return buttons[buttonType as keyof Object] })
            }

            <SearchBarTable functionFilter={filter} />
        </Toolbar>
        <Divider orientation="horizontal"/>
        <Toolbar className={classes.root}>
            <ButtonHeader
                typeButton="filter"
            label="Borrar"
            iconType="close"
            onClick={() => { dispatch(deletePerson()) }}
        />
        <ButtonHeader
            typeButton="filter"
            label="Borrar"
            iconType="close"
            onClick={() => { dispatch(deletePerson()) }}
        />
        <ButtonHeader
            typeButton="filter"
            label="Borrar"
            iconType="close"
            onClick={() => { dispatch(deletePerson()) }}
        />
        <ButtonHeader
            typeButton="filter"
            label="Borrar"
            iconType="close"
            onClick={() => { dispatch(deletePerson()) }}
        />
            <ButtonHeader
            typeButton="filter"
            label="Borrar"
            iconType="close"
            onClick={() => { dispatch(deletePerson()) }}
        />
            <ButtonHeader
            typeButton="filter"
            label="Borrar"
            iconType="close"
            onClick={() => { dispatch(deletePerson()) }}
        />
            <ButtonHeader
            typeButton="filter"
            label="Borrar"
            iconType="close"
            onClick={() => { dispatch(deletePerson()) }}
        />
            <ButtonHeader
            typeButton="filter"
            label="Borrar"
            iconType="close"
            onClick={() => { dispatch(deletePerson()) }}
        />

        </Toolbar>
        </>

    )
}
export default MenuHeaderTable