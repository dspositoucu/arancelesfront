
import PropTypes from 'prop-types';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import { KeyboardDatePicker, DatePicker } from '@material-ui/pickers';
import { useField } from 'formik';


const useStyles = makeStyles((theme) =>
    createStyles({
        marginNone: {
            margin: 'none'
        }
    }));


const DateField = (props) => {

   // const classes = useStyles()

    const { name, title, value = null, onChange, simple=false } = props
    return (
            <KeyboardDatePicker
                inputVariant="outlined"
                margin="dense"
                autoOk
                label={title}
                openTo="date"
                name={name}
                disableToolbar={false}
                onChange={onChange}
                value={value || null}
                format="DD/MM/YYYY"
                placeholder="10/10/2010"
                style={{margin:0}}
            />
    )
}

export default DateField