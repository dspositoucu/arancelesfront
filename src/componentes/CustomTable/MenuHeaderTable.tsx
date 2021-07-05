import { FC } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Typography, Toolbar, Divider } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

//example pdf
import BuilPDF from '../../helpers/buildTablePdf'

//types
import { AppState } from '../../Redux/state/AppState';

//actions
import { removeFilterTag } from '../../Redux/actions/informes/ActionCreatorInformes'
import { setTableFilterinUse } from '../../Redux/actions/personas/ActionCreator';

//interface
import IFilterSearchBar from '../CustomTable/interface/IFilterSearchBar'

//component 
import ButtonHeader from '../Buttons';
import SearchBarTable from './SearchBarTable';
import FilterMenu from '../CustomTable/FilterMenu';

// list button
import Buttons from '../Buttons/ButtonListHeaderTable'

interface Props {
    filter?: any,
    buttonsList: string[],
    filterSearchBar?: IFilterSearchBar[]
    filterMenu: boolean
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

const MenuHeaderTable: FC<Props> = ({ filter, buttonsList, filterSearchBar, filterMenu }) => {

    const dispatch = useDispatch()
    const { filterTags } = useSelector((state: AppState) => state.InformesState)

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

    const classes = useStyles()
    return (
        <>
            <Toolbar className={classes.root}>
                {<BuilPDF />}
                <Typography
                    className={classes.titleTable}
                    variant="subtitle1"
                    onClick={() => { dispatch(setTableFilterinUse(false)) }}
                >
                    Listado de Personas
                </Typography>
                {filterMenu && <FilterMenu />}

                {
                    buttonsList.map(buttonType => <Buttons key={buttonType} type={buttonType} />)
                }

                <SearchBarTable
                    functionFilter={filter}
                    filterSearchBar={filterSearchBar}
                />

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