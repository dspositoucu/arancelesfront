import { FC, useState } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Typography, Toolbar, Divider } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import RegisterModal from '../Modals/registerModal'

//types
import { AppState } from '../../Redux/state/AppState';

//actions
import {
    deletePerson,
    setTableFilterinUse,
    removeFilterTag
} from '../../Redux/actions/ActionCreator'

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
        tagsMenu: {
            height: 'max-content',
            display: "flex",
            alignItems: "center",
            flexWrap: 'wrap'
        },
        titleTable: {
            color: '#6E6893',
            cursor: "pointer",
            "&:hover": {
                color: '#51488D'
            }
        }
    }))


const MenuHeaderTable: FC<Props> = ({ filter, buttonsList }) => {


    const OpenModalRegister = () => {
        setModalRegister(!modalRegister)
    }

    const [modalRegister, setModalRegister] = useState(false)

    const history = useHistory()
    const dispatch = useDispatch()
    const { filterTags } = useSelector((state: AppState) => state.PersonState)

    const showTags = () => {
        let arrTags = []
        for (let tag in filterTags) {
            arrTags.push({
                key: tag,
                value: filterTags[tag as keyof Object]
            })
        }
        return arrTags
    }


    const buttons = {
        imprimir: <ButtonHeader
            label="Imprimir"
            iconType="imprimir"
        />,

        nuevo: <ButtonHeader
            label="Nuevo"
            iconType="nuevo"
            onClick={() => {OpenModalRegister()}}
        />,

        borrar: <ButtonHeader
            label="Borrar"
            iconType="borrar"
            onClick={() => { dispatch(deletePerson()) }}
        />
    }

    const classes = useStyles()
    return (
        <>  {/* Modal register */}
            {modalRegister && <RegisterModal closeModal={OpenModalRegister} active={modalRegister} />}


            <Toolbar className={classes.root}>
                <Typography
                    className={classes.titleTable}
                    variant="subtitle1"
                    onClick={() => { dispatch(setTableFilterinUse(false)) }}
                >
                    Listado de Personas
                </Typography>
                <FilterMenu />

                {
                    buttonsList.map(buttonType => buttons[buttonType as keyof Object])
                }

                <SearchBarTable functionFilter={filter} />
            </Toolbar>

            {showTags().filter(tag => tag.value).length
                ? <>
                    <Divider orientation="horizontal" />
                    <Toolbar className={classes.tagsMenu}>
                        {
                            showTags().map(tag => {
                                if (!tag.value) return
                                return (
                                    <ButtonHeader
                                        label={tag.key.split('_').join(' ')}
                                        iconType="close"
                                        typeButton="filter"
                                        onClick={() => { dispatch(removeFilterTag(tag.key)) }}
                                    />
                                )
                            })
                        }
                    </Toolbar>
                </>
                : null
            }
        </>

    )
}
export default MenuHeaderTable