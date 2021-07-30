import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Input from './Input';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        selectProps: {
            height: 100
        }
    }));

const AutocompleteSelect = (props) => {

    const { field, options} = props

    const classes = useStyles()

    return (
        <>
            <Autocomplete
                {...props}
                MenuProps={{
                    disableScrollLock: false,
                    classes:{paper:classes.selectProps}
                }}
                id="combo-box-demo"
                options={options}
                getOptionLabel={(option: any) => option[field]}
                renderInput={(params) => <Input {...params} {...props} />}
            />
        </>
    )
}

export default AutocompleteSelect