import React, { FC, useState } from 'react'
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
import { menuData } from '../../dataMenuList.json'

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
        subMenuOpt: {
            fontSize: '12px',
        },
        selected: {
            color: '#7B61FF'
        },
        menuOpt: {
            fontSize: "16px"
        },
        ul: {
            listStyleType: "disc"
        }

    })
)

const Menu: FC<Props> = (props) => {
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
                {menuData.map((menuOp) => (
                    <>
                        <ListItem onClick={() => handleClick(menuOp.MenuOption)} button key={menuOp.MenuOption}>
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
                        {menuOp.SubMenu.map(submenu => (
                            <Collapse in={open[menuOp.MenuOption]} timeout="auto" unmountOnExit key={submenu}>
                                <ul className={classes.ul}>
                                    <li>
                                        <ListItemText classes={{ primary: classes.subMenuOpt }} primary={submenu} />
                                    </li>
                                </ul>
                            </Collapse>
                        ))}

                    </>
                ))}
            </List>
        </div>
    )
}
export default Menu