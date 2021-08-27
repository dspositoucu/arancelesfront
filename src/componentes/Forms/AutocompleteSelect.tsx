import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Input from './Input';
import Controls from './Controls';

//import hook
import useSelect from '../../hooks/useSelect';
import { useState, useEffect } from 'react';

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

    const { filtro, promSelectList, onChange, name, valueautocomplete, label } = props
    const [opt, setOpt] = useState<any[]>([])
    const defVal = { id: 0, [filtro]: "Sin Valor" }
    const { opciones } = useSelect(promSelectList)

    useEffect(() => {
        opciones.length && setOpt([defVal, ...opciones])
    }, [opciones])

    return (
        <>
            <Autocomplete
                {...props}
                MenuProps={{
                    disableScrollLock: false,
                    classes: { paper: classes.selectProps }
                }}
                onChange={onChange}
                defaultValue={opt[valueautocomplete]}
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
            />
        </>
    )
}

export default AutocompleteSelect