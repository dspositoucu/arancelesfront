import { FC, useState, useEffect } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Typography, Toolbar, Divider } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Chip from '@material-ui/core/Chip';
//example pdf
import BuilPDF from '../../helpers/buildTablePdf'

//actions
import { removeFilterTag } from '../../Redux/actions/informes/ActionCreatorInformes'

//component 
import SearchBarTable from './SearchBarTable';
import FilterMenu from '../CustomTable/FilterMenu';

// list button
import Buttons from '../Buttons/ButtonListHeaderTable'

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 10px 0px 10px",
            height: 50,
        },
        tagsMenu: {
            maxHeight: 'max-content',
            minHeight: 40,
            padding: "10px 10px 0px 10px",
            display: "flex",
            alignItems: "center",
            flexWrap: 'wrap'
        },
        chip: {
            margin: theme.spacing(0.5),
            borderRadius:5,
            color:'#6c74fa',
            background: '#dee2fe',
            border: 'solid 1px #f3f4fb',
            '& .MuiChip-deleteIcon':{
                color:'#6c74fa'
            },
            '&:focus':{
                background:'#dee2fe'
            }
        },
    }))

const MenuHeaderTable = ({ filter, buttonsList, filterSearchBar, filterMenu }) => {

    const dispatch = useDispatch()
    const { filterTags } = useSelector((state) => state.InformesState)

    const showTags = () => {
        let arrTags = []
        for (let tag in filterTags) {
            if (filterTags[tag]) {
                arrTags.push(tag)
            }
        }
        return arrTags
    }

    const classes = useStyles()
    return (
        <>
            <div className={classes.root}>
                <SearchBarTable
                    functionFilter={filter}
                    filterSearchBar={filterSearchBar}
                />
                {filterMenu && <FilterMenu />}
                {
                    buttonsList.map(buttonType => <Buttons key={buttonType} type={buttonType} />)
                }

            </div>

            {showTags().length
                ? <>
                    <Toolbar className={`${classes.tagsMenu}`}>
                        {
                            showTags().map((tag) => {
                                return (
                                    <Chip
                                        className={`${classes.chip} slideIn`}
                                        key={tag}
                                        label={tag.split('_').join(' ')}
                                        onDelete={() => dispatch(removeFilterTag(tag))}
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