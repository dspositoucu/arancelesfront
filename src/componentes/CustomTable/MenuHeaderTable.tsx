import { FC, ReactNode } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Typography, Toolbar } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

//actions
import { deletePerson } from '../../Redux/actions/personActionCreator'


//component 
import ButtonHeader from '../Buttons'
import SearchBarTable from './SearchBarTable'

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
        }
    }))


const MenuHeaderTable: FC<Props> = ({ filter, buttonsList }) => {


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
            label="Nuevo"
            iconType="borrar"
            onClick={() => { dispatch(deletePerson()) }}
        />
    }


    const history = useHistory()
    const dispatch = useDispatch()


    console.log(buttonsList)
    const classes = useStyles()
    return (
        <Toolbar className={classes.root}>
            <Typography className={classes.titleTable} variant="subtitle1">Listado de Personas</Typography>

            {
                buttonsList.map(buttonType => { return buttons[buttonType as keyof Object]})
            }

            <SearchBarTable functionFilter={filter} />
        </Toolbar>
    )
}
export default MenuHeaderTable