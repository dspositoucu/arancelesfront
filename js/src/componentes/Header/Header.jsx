
import { useSelector, useDispatch } from 'react-redux';
import { Typography } from '@material-ui/core';

import { makeStyles, createStyles } from "@material-ui/core/styles";

//actions
import { logout } from '../../Redux/actions/users/userActionCreator'

//Icons
import Icons from '../Icons'

//img UCU_header
const UCUimg = require('../../assets/ucu_header.png');

const useStyles = makeStyles((theme) =>
    createStyles({
        appBar: {
            height: 50,
            padding: " 0px 8px",
            background: '#FFF',
            color: '#25213B',
            display: "flex",
            alignItems: "center"
        },
        headerTitle: {
            flex: 1,
            flexGrow: 1
        },
        containerImg: {
            width: '170px',
            display: 'flex',
            alignItems: 'center'
        },
        img: {
            width: "auto",
            height: 35
        },
        headerUser: {
            display: 'flex',
            width: '200px',
            justifyContent: 'space-around',
            alignItems: 'center',
        },

        icon: {
            display: 'grid',
            placeItems: 'center',
            cursor: 'pointer'
        }

    })
);


const Header = ({ title }) => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const { usuario } = useSelector((state) => state.UsuarioState)

    return (
        <div className={classes.appBar}>
            <div className={classes.containerImg}>
                <img className={classes.img} src={UCUimg.default} />
            </div>
            <Typography className={classes.headerTitle} variant="h5" noWrap>
                {title}
            </Typography>
            <div className={classes.headerUser}>
                <Icons type="user" />
                <Typography variant="subtitle1">
                    {usuario ? usuario.username : 'Nombre de usuario'}
                </Typography>
                <div className={classes.icon} onClick={() => dispatch(logout())}>
                    <Icons type="logout" />
                </div>
            </div>
        </div>
    )
}

export default Header