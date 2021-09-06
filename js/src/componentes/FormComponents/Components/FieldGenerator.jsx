import React from 'react';
import Controls from '../Fields/Controls';
import PropTypes from 'prop-types';

function FieldGenerator({ fieldData, readOnly = true }) {

  let fieldDataWithReadOnly = { ...fieldData, readOnly: fieldData.readOnly || readOnly };

  switch (fieldData.typeField) {
    case "text" || 'email':
      return <Controls.Input fieldData={fieldDataWithReadOnly}/>;
    case "date":
      return <Controls.DateField fieldData={fieldDataWithReadOnly} />
     case "checkbox":
      return <Controls.CheckboxFormik fieldData={fieldDataWithReadOnly} />;
    case "switch":
      return <Controls.CheckboxFormik fieldData={fieldDataWithReadOnly} isSwitch />;
    default:
      return null
  }
}

FieldGenerator.propTypes = {
  fieldData: PropTypes.object.isRequired,
  readOnly: PropTypes.bool,
};

export default FieldGenerator



