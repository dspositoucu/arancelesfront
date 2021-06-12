import React, { FC } from 'react'
import {IconButton, InputBase, Paper, Divider } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

interface Props { 
    filter: any
}

const useStyles = makeStyles((theme:Theme) =>
    createStyles({
        root: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            background: "#F2F0F9",
            borderRadius:8,
            boxShadow:"none",
            maxWidth: "25%",
            minWidth: 250,
            height:34
        },
        input: {
            color:"#6E6893",
            marginLeft: theme.spacing(1),
            flex: 1,
            '& ::placeholder': {
                fontSize:12
            },
            fontSize:14
        },
        iconButton: {
            color:"#6E6893",
            padding: 5,
        },
        divider: {
            height: 26,
            margin: 2,
        },
    }),
);

const SearchBarTable: FC<Props> = ({ filter }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <IconButton className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
            <Divider className={classes.divider} orientation="vertical" />
            <InputBase
                className={classes.input}
                placeholder={"Buscar por Nombre"}
                onChange={filter}
            />
        </Paper>
    )
}

export default SearchBarTable