import { useState } from "react";
import {
  FormControlLabel,
  Checkbox,
  Switch
} from "@material-ui/core";
import { useField } from 'formik';
import PropTypes from 'prop-types';

function CheckboxFormik(
  { label = "", name = "", readOnly = false, required = false, isSwitch = false, onChange=()=>{}, value=false, onClick = ()=>{}}) {

  return (
    <div>
      <FormControlLabel
        control={
          isSwitch ? <Switch
            checked={value} name={name} onChange={onChange}
            onClick={onClick}
          /> : <Checkbox
            checked={value} name={name} onChange={onChange}
            onClick={onClick}
          />
        }
        disabled={readOnly}
        label={required ? label + " *" : label}
      />
    </div>
  )
};


export default CheckboxFormik
