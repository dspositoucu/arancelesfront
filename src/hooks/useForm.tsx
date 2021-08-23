import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent, useState, FormEvent, FC, ReactNode, useEffect } from 'react';
import Controls from '../componentes/Forms/Controls';

//acciones
import { selectDataAction } from '../Redux/actions/globalActions/ActionCreatorGlobal';
//model
import { AppState } from '../Redux/state/AppState';

export const useForm = (initialFValues) => {

  const [values, setValues] = useState(initialFValues);

  const { detallesData } = useSelector((state: AppState) => state.GlobalState)

  const cargarDatosEdit = () => {
    setValues({
      ...values,
      ...detallesData
    })
  }

  const handleChangeForm = ({ target }: any | ChangeEvent<HTMLInputElement>): void => {
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
    resetForm
  }
}
  