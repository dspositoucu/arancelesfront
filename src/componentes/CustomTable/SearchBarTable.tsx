import React, { FC, useState, ChangeEvent } from 'react'
import { IconButton, InputBase, Paper, Divider } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";

interface Props {
    functionFilter: any
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            background: "#F2F0F9",
            borderRadius: 8,
            boxShadow: "none",
            maxWidth: "25%",
            minWidth: 250,
            height: 34
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
            "& :focus":{
                background:'#F2F0F9'
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

const SearchBarTable: FC<Props> = ({ functionFilter }) => {
    const classes = useStyles();

    const [filter, setFilter] = useState<any>("nombre")

    const  handleChangeFilter = ({target}:ChangeEvent<{ value: unknown }>) =>{
        setFilter(target.value)
    }


    return (
        <Paper className={classes.root}>
            <Select
                onChange={handleChangeFilter}
                className={classes.select}
                defaultValue={"nombre"}
                disableUnderline
                value={filter}
            >
                <MenuItem value={"nombre"}>Nombre</MenuItem>
                <MenuItem value={"n_doc"}>N° Doc</MenuItem>
            </Select>
            <IconButton className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
            <Divider className={classes.divider} orientation="vertical" />
            <InputBase
                className={classes.input}
                placeholder={`Filtrar por ${filter?.toUpperCase()}`}
                onChange={(e) => functionFilter(e, filter)}
            />
        </Paper>
    )
}

export default SearchBarTable