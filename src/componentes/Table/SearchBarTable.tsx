import React, { FC } from 'react'
import {IconButton, InputBase, Paper, Divider } from '@material-ui/core';
import { makeStyles, createStyles, withStyles, Theme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

interface Props { }

const useStyles = makeStyles((theme:Theme) =>
    createStyles({
        root: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            background: "#F2F0F9",
            borderRadius:10,
            boxShadow:"none",
            width: 400,
        },
        input: {
            color:"#6E6893",
            marginLeft: theme.spacing(1),
            flex: 1,
        },
        iconButton: {
            color:"#6E6893",
            padding: 10,
        },
        divider: {
            height: 28,
            margin: 4,
        },
    }),
);

const SearchBarTable: FC<Props> = (props) => {
    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root}>
            <IconButton className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
            <Divider className={classes.divider} orientation="vertical" />

            <InputBase
                className={classes.input}
                placeholder={"Buscar por Nombre"}
            />
        </Paper>
    )
}

export default SearchBarTable