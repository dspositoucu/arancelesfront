import React, {useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import { Tabs, Tab } from "@material-ui/core";
import { makeStyles, createStyles, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
createStyles({
rootTab: {
  textTransform: 'none',
  minWidth: '100px',
  minHeight: 35,
  padding: 0,
  fontSize: '0.9rem',
  '@media (min-width:600px)': {
    fontSize: '0.9rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
},

tabSelect: {
  color: '#8cbaff',
  fontWeight: 600,
},
tab: {
  color: '#90a5c0',
  fontWeight: 400,
  border: 'solid 1px transparent',
},
tabs: {
  minHeight: 40,
  background: '#FFF'
},
indicator: {
  background: '#8cbaff'
}
}))
export default function AppBar() {
    const tabs = [
        { label: "Cuentas", value: "/cuentas" },
        { label: "Personas", value: "/personas" },
        { label: "Aranceles", value: "/aranceles" },
        { label: "Barridas", value: "/barridas" },
        { label: "Informes", value: "/informes" },
        { label: "Caja", value: "/caja" },
        { label: 'Alumos Sao', value: "/alumnos_sao" }
    ]

    const [currentTag, setCurrenTag] = useState('')

    const classes = useStyles()
    return (
        <Tabs
            value={currentTag}
            className={classes.tabs}
            onChange={(e,currTag)=>setCurrenTag(currTag)}
            classes={{
                indicator: classes.indicator
            }}>
            {tabs.map(tab => {
                return <Tab
                    disableFocusRipple={true}
                    disableRipple={true}
                    className={`${classes.rootTab} ${window.location.pathname === tab.value ? classes.tabSelect : classes.tab}`}
                    value={tab.value}
                    label={tab.label}
                    component={Link}
                    to={tab.value}
                />
            })}
        </Tabs>
    )
}
