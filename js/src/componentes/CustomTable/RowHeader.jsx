import React from 'react'
import TableRow from '@material-ui/core/TableRow';
import { TableHead } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
    createStyles({
        rowHeader: {
            height: 50,
            boxShadow: '0px 1px 15px 0px rgba(0,0,0,0.1)'
        }
    }))

const RowHeader = ({ rowChek, children }) => {
    const classes = useStyles()

    //rowChek && rowHeader.unshift(<CellCheckBox key={'check'} check={!!selectListPerson.length} checkAll variant="head" />);

    return (
        <TableHead className={classes.rowHeader}>
            <TableRow>
                {children}
            </TableRow>
        </TableHead>
    )
}
export default RowHeader