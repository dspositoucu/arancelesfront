import { useState } from 'react'
import { IconButton, InputBase, Paper, Divider } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";


import { useSelector } from 'react-redux'


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            background: "#f3f4fb",
            borderRadius: 5,
            boxShadow: "none",
            maxWidth: "25%",
            minWidth: 400,
            height: 35
        },
        input: {
            color: "#6E6893",
            marginLeft: theme.spacing(1),
            flex: 1,
            '& ::placeholder': {
                fontSize: 12
            },
            fontSize: 14
        },
        select: {
            color: "#6E6893",
            padding: 5,
            fontSize: 12,
            "& :focus": {
                background: '#F2F0F9'
            }
        },
        iconButton: {
            color: "#6E6893",
            padding: 5,
            border: "none"
        },
        divider: {
            height: 26,
            margin: 2,
        },
    }),
);

const SearchBarTable = ({ functionFilter, filterSearchBar=[] }) => {
    const classes = useStyles();
    const { tableFilterinUse } = useSelector((state)=> state.GlobalState)
    const [ textInput, setTextInput ] = useState('')
    const [filter, setFilter] = useState(filterSearchBar[0].key) 
 
    const handleChangeFilter = ({ target }) => {
        setFilter(target.value)
    }

    return (
        <Paper className={classes.root}>
            <Select
                onChange={handleChangeFilter}
                className={classes.select}
                defaultValue={filterSearchBar[0].key}
                disableUnderline
                value={ filter }
            >
                {
                    filterSearchBar && filterSearchBar.map((data,index)=>{
                        return(
                            <MenuItem key={index} value={data.key}>{data.label}</MenuItem>
                        )
                    })
                }
            </Select>
            <IconButton className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
            <Divider className={classes.divider} orientation="vertical" />
            <InputBase
                className={classes.input}
                placeholder={`Buscar por ${filter.toUpperCase()}`}
                onChange={(e) => {
                    setTextInput(e.target.value)
                    functionFilter(e, filter)}}
                value={ tableFilterinUse ? textInput : ''}
            />
        </Paper>
    )
}

export default SearchBarTable