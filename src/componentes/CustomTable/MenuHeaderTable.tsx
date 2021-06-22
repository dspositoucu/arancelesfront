import { FC, useState } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Typography, Toolbar, Divider } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

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
import Register from '../Forms/Register'
import RegisterModal from '../Modals/registerModal'

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
            key={1}
        />,

        nuevo: <ButtonHeader
            label="Nuevo"
            iconType="nuevo"
            onClick={() => { OpenModalRegister() }}
            key={2}
        />,

        borrar: <ButtonHeader
            label="Borrar"
            iconType="borrar"
            onClick={() => { dispatch(deletePerson()) }}
            key={3}
        />
    }

    const classes = useStyles()
    return (
        <>  {/* Modal register */}
            {modalRegister &&
                <RegisterModal
                    closeModal={OpenModalRegister}
                    active={modalRegister}>
                    <Register />
                </RegisterModal>
            }


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
                            showTags().map((tag) => {
                                if (!tag.value) return null
                                return (
                                    <ButtonHeader
                                        key={tag.key}
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