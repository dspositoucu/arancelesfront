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

    const autocompleteRef = useRef()

    useEffect(() => {
        opciones && opciones.length && setOpt(opciones)
        opciones && opciones.length && valueautocomplete!=="" && setSelectedMode(opciones.filter(op=>op[valorSalida]===valueautocomplete)[0])
    }, [opciones])

    return (
        <>
            {<Autocomplete
                value={selectedMode}
                ref={autocompleteRef}
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