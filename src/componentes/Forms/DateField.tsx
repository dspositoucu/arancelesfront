import React, { FC } from 'react'
import PropTypes from 'prop-types';
import { KeyboardDatePicker, DatePicker } from '@material-ui/pickers';
import { useField } from 'formik';



const DateField = (props) => {

    const { name, title, value = null, onChange, simple=false } = props
    return (
        <div>
            <KeyboardDatePicker
                inputVariant="outlined"
                margin="dense"
                autoOk
                label={title}
                openTo="date"
                name={name}
                disableToolbar={false}
                onChange={onChange}
                value={value & value || null}
                format="DD/MM/YYYY"
                placeholder="10/10/2010"
            />
        </div>
    )
}

export default DateField