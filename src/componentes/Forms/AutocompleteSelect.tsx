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

    const { filtro, promSelectList, onChange, name, valueautocomplete, label, valorSalida = null, multiple = false } = props

    const { opciones } = useSelect(promSelectList)
    const [value, setValue] = useState<any>([])

    const setValueMultiple = () => {
        if (!multiple) return
        let selectValue:any = []
        let valueMultiple: any
        if (typeof valueautocomplete === "string") {
            valueMultiple = valueautocomplete.split(',')
            valueMultiple.forEach(data => {
                opciones.forEach((data2, j) => {
                    parseInt(data) === data2[valorSalida] && selectValue.push(data2)
                })
            })
            setValue(selectValue)
        } else {
            setValue(opciones.filter(op => op[valorSalida] === valueMultiple))
        }

    }
    const onChangeAutocomplete = (value: any) => {
        setValue(value)
        const sendValue = value.map((val: any) => val[valorSalida])
            onChange({ target: { value: !value.length ? [] : sendValue, name } })
    }
    const existOpt = opciones && opciones.length

    useEffect(() => {
        multiple && setValueMultiple()
    }, [opciones])

    return (
        <>
            {<Autocomplete
                value={!multiple ? (existOpt && opciones.filter(op => op[valorSalida] === valueautocomplete)[0]) : value}
                {...props}
                multiple={multiple}
                name="autocomplete"
                getOptionSelected={(option: any, value) => {
                    return  value ? value[valorSalida] === option[valorSalida] : true
                }}
                getOptionLabel={(option: any) => option[filtro] || ""}

                MenuProps={{
                    disableScrollLock: false,
                    classes: { paper: classes.selectProps }
                }}
                onChange={(event, value: any) => {
                    multiple
                        ? onChangeAutocomplete([...value])
                        : onChange({ target: { value: !value ? 0 : value[valorSalida], name } })
                }}
                inputVariant="outlined"
                disablePortal
                placeholder={label}
                id="combo-box-demo"
                options={opciones}
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