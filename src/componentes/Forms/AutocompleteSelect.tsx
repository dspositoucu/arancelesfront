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

    const { filtro, promSelectList, onChange, name, valueautocomplete, label,valorSalida=null, multiple=false } = props
    const [opt, setOpt] = useState<any[]>([])
    const { opciones } = useSelect(promSelectList)
    const [selectedMode, setSelectedMode] = useState<any>([])

    console.log("asdadasdsadasdasda ",selectedMode)

    const setValueMultiple = () => {

        if(!multiple) return
        let copyOpt = [...opt]
        let valueMultiple:any

        if(typeof valueautocomplete === "string"){
            valueMultiple = valueautocomplete.split(',')
            valueMultiple.forEach(data => {
                copyOpt.forEach((data2, j) => {
                    parseInt(data) !== data2[valorSalida] && copyOpt.splice(j, 1)
                })
            })
            setSelectedMode([...copyOpt])
         } else{
            setSelectedMode(copyOpt.filter(op=>op[valorSalida]===valueMultiple))
         }

    }
    const onChangeAutocomplete = (value:any) => {
         setSelectedMode(value)
        const sendValue = value.map((val:any)=>val[valorSalida])
        onChange({ target: { value: !value.length ? [] : sendValue , name } })
    }

    const booleanOpciones =  opciones && opciones.length

    useEffect(() => {
        multiple && setValueMultiple()
        booleanOpciones && setOpt(opciones)
    }, [opciones])

    console.log()

    return (
        <>
            {<Autocomplete
                value={!multiple ? (booleanOpciones && opciones.filter(op=>op[valorSalida]===valueautocomplete)[0]):selectedMode}
                {...props}
                multiple={multiple}
                name="autocomplete"
                MenuProps={{
                    disableScrollLock: false,
                    classes: { paper: classes.selectProps }
                }}
                onChange={(event,value:any)=>{
                    multiple 
                        ? onChangeAutocomplete([...value])
                        : onChange({ target: { value: !value ? 0 : value[valorSalida], name } })
                }}
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