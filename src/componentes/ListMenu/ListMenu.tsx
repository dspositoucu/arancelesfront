import React, { FC, useState } from 'react';
import {
    List,
    ListItem,
    ListItemText,
    Collapse,
    Tooltip,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

//Icons
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

//Example data
import { menuData } from '../../dataMenuList.json';

//Components
import ListSubMenuItem from './ListSubMenuItem';

import history from '../../helpers/history'

interface Props { }

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        menu: {
            background: '#E3E0EE',
            color: '#6E6893'
        },
        menuContainer: {
            overflow: 'auto',
            background: '#E3E0EE',
            height: '100vh'
        },
        selected: {
            color: '#7B61FF'
        },
        menuOpt: {
            fontSize: "16px"
        },
    })
)

const ListMenu: FC<Props> = (props) => {
    const classes = useStyles()
    const [open, setOpen] = useState<any>({ open: '' });

    //Funcion para desplegar opciones del menu de manera independiente. 
    const handleClick = (value: string): void => {
        setOpen(
            { [value]: !open[value] }
        );
    };

    return (
        <div className={classes.menuContainer}>
            <List className={classes.menu}>
            <ListItem onClick={() => history.push('/informes')} button >
                            <ListItemText classes={{ primary: classes.menuOpt }} primary={'Informes'} />
            </ListItem>
            <ListItem onClick={() => history.push('/cuentas')} button >
                            <ListItemText classes={{ primary: classes.menuOpt }} primary={'Cuentas'} />
            </ListItem>
            <ListItem onClick={() => history.push('/personas')} button >
                            <ListItemText classes={{ primary: classes.menuOpt }} primary={'Personas'} />
            </ListItem>
            <ListItem onClick={() => history.push('/aranceles')} button >
                            <ListItemText classes={{ primary: classes.menuOpt }} primary={'Aranceles'} />
            </ListItem>
               {/*  {menuData.map((menuOp, i) => (
                    <div key={i}>
                        <ListItem onClick={() => handleClick(menuOp.MenuOption)} button >
                            <ListItemText classes={{ primary: classes.menuOpt }} primary={menuOp.MenuOption} />
                            {open[menuOp.MenuOption] ? (
                                <Tooltip title="Collapse" placement="bottom">
                                    <ExpandLess />
                                </Tooltip>
                            ) : (
                                <Tooltip title="Expand" placement="bottom">
                                    <ExpandMore />
                                </Tooltip>
                            )}
                        </ListItem>
                        {menuOp.SubMenu.map((submenu, j) => (
                            <Collapse in={open[menuOp.MenuOption]} timeout="auto" unmountOnExit key={j}>
                                <ListSubMenuItem subMenuData={submenu} />
                            </Collapse>
                        ))}
                    </div>
                ))} */}
            </List>
        </div>
    )
}
export default ListMenu