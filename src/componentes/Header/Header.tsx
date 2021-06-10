import React, { FC } from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
} from '@material-ui/core'
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

//Icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMore from "@material-ui/icons/ExpandMore";

//img UCU_header
const UCUimg = require('../../assets/ucu_header.png');


interface Props {
    title: string
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            background:'#FFF',
            color: '#25213B',
            boxShadow: '0px 4px 25px rgba(148, 130, 255, 0.51)',
            flexGrow: 1
        },
        headerTitle: {
            flex:1,
            flexGrow: 1
        },
        containerImg:{
            width:'170px',
            display: 'flex',
            alignItems: 'center'
        },
        img:{
            width:"auto",
            height:35
        },
        headerUser:{
            display:'flex',
            width:'200px',
            justifyContent:'space-around',
            alignItems:'center',
        }
    })
);


const Header: FC<Props> = ({ title }) => {
    const classes = useStyles()
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <div className={classes.containerImg}>
                    <img className={classes.img} src={UCUimg.default}/>
                </div>
                <Typography className={classes.headerTitle} variant="h5" noWrap>
                    {title}
                </Typography>
                <div className={classes.headerUser}>
                    <AccountCircleIcon/>
                    <Typography variant="subtitle1">
                            Nombre Usuario
                    </Typography>
                    <ExpandMore/>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header