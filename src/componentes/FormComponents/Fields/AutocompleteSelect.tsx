import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

//import hook
import { useState} from 'react';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        selectProps: {
            height: '100px'
        },
        marginNone: {
            margin: 'none',
            width:'100%'
        }
    }));

const AutocompleteSelect = (props) => {
    const classes = useStyles()
    const { filtro, name, label, getAsyncOptions,formFunctions,output } = props
    const { setTouched, setFieldValue } = formFunctions;
    const [opt, setOpt] = useState<any[]>([])
    
    const setOptionsAsync = () => {
        if(opt.length) return
        getAsyncOptions().then(
            resp=>{
                setOpt(resp)
            })
    }
    return (
        <>
            <Autocomplete
                onSelect={setOptionsAsync}
                {...props}
                MenuProps={{
                    disableScrollLock: false,
                    classes: { paper: classes.selectProps }
                }}
                onChange={ (_, value:Object, event) => {
                    if(event==="clear") return setFieldValue(name, value)
                    setFieldValue(name, value[output])
                } }
                inputVariant="outlined"
                disablePortal
                placeholder={label}
                options={opt}
                getOptionLabel={(option: any) => option[filtro]}
                renderInput={(params) => (
                        <TextField
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