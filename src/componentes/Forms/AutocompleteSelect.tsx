import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Input from './Input';
import Controls from './Controls';

//import hook
import useSelect from '../../hooks/useSelect';
import { useState, useEffect, useRef } from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        selectProps: {
            height: '100px'
        },
        marginNone: {
            margin: 'none'
        }
    }));

const AutocompleteSelect = (props) => {
    const classes = useStyles()

    const { filtro, promSelectList, onChange, name, valueautocomplete, label,valorSalida=null } = props
    const [opt, setOpt] = useState<any[]>([])
    const { opciones } = useSelect(promSelectList)
    const [selectedMode, setSelectedMode] = useState(null)

    const booleanOpciones =  opciones && opciones.length

    useEffect(() => {
        booleanOpciones && setOpt(opciones)
    }, [opciones])

    return (
        <>
            {<Autocomplete
                value={ booleanOpciones && opciones.filter(op=>op[valorSalida]===valueautocomplete)[0]}
                {...props}
                name="autocomplete"
                MenuProps={{
                    disableScrollLock: false,
                    classes: { paper: classes.selectProps }
                }}
                onChange={onChange}
                inputVariant="outlined"
                disablePortal
                placeholder={label}
                id="combo-box-demo"
                options={opt}
                getOptionLabel={(option: any) => option[filtro]}
                renderInput={(params) => (
                    <Controls.Input
                        {...params}
                        label={label}
                        className={classes.marginNone}
                        size="small"
                        placeholder={label} 
                        variant="outlined"
                        />
                )}
            />}
        </>
    )
}

export default AutocompleteSelect