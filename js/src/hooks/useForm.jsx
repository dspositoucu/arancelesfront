import { useSelector } from 'react-redux';
import { ChangeEvent, useState, useEffect } from 'react';
import Controls from '../componentes/Forms/Controls';

export const useForm = (initialFValues) => {

  const [values, setValues] = useState(initialFValues);

  const { detallesData } = useSelector((state) => state.GlobalState)

  const cargarDatosEdit = () => {
    setValues({
      ...values,
      ...detallesData
    })
  }

  const handleChangeForm = ({ target }) => {
    const { name, value } = target
    setValues({
      ...values,
      [name]: value
    })
  }

  useEffect(() => {
    if (Object.entries(detallesData).length) cargarDatosEdit()
  }, [Object.values(initialFValues)[0]])

  const resetForm = () => {
    setValues(initialFValues);
  }

  return {
    values,
    setValues,
    handleChangeForm,
    resetForm,
    formEdit: !!Object.entries(detallesData).length
  }
}
  