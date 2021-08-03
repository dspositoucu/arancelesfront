import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Input from './Input';

//import hook
import useSelect from '../../hooks/useSelect';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        selectProps: {
            height: 100
        }
    }));

const AutocompleteSelect = (props) => {

    const { filtro, promSelectList, onChange, name } = props
    
    const { opciones } = useSelect(promSelectList)

    const classes = useStyles()

    return (
        <>
            <Autocomplete
                {...props}
                onChange={(event,value:any)=>{return value ? onChange({target:{name,value:value.id}}): null }}
                MenuProps={{
                    disableScrollLock: false,
                    classes: { paper: classes.selectProps }
                }}
                disablePortal
                id="combo-box-demo"
                options={opciones}
                getOptionLabel={(option: any) => option[filtro]}
                renderInput={(params) => <Input {...params} {...props} />}
            />
        </>
    )
}

export default AutocompleteSelect