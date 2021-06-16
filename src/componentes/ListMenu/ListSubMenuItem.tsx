import React, { FC } from 'react'
import { ListItemText } from "@material-ui/core";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { createStyles, makeStyles } from "@material-ui/core/styles";

interface Props {
    subMenuData:string
 }

const useStyles = makeStyles( ()=>
    createStyles({
        ul: {
            listStyleType: "disc"
        },
        subMenuOpt: {
            fontSize: '12px',
        },
    })
)
const ListSubMenuItem: FC<Props> = ({subMenuData}) => {
    const history = useHistory()
    const classes = useStyles()
    return (
        <>
            <ul className={classes.ul}>
                <NavLink to="/table">
                    <li>
                        <ListItemText classes={{ primary: classes.subMenuOpt }} primary={subMenuData} />
                    </li>
                </NavLink>
            </ul>
        </>
    )
}
export default ListSubMenuItem