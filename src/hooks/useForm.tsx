import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent, useState, FormEvent, FC, ReactNode, useEffect } from 'react';
import { makeStyles, createStyles, Theme, Typography, Divider } from "@material-ui/core";


//acciones
import { selectDataAction } from '../Redux/actions/globalActions/ActionCreatorGlobal';
//model
import { AppState } from '../Redux/state/AppState';

export const useForm = (initialFValues, validateOnChange = false) => {
  
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

  useEffect(()=>{
    if(Object.entries(detallesData).length) cargarDatosEdit()
  },[])

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

export const Form = ({ width = '100%', children, title, ...other }) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        width: width,
        background: "#FFF",

        '& .MuiFormControl-root': {
          width: '100%',
          height: '100%'
        },
      },
      headerForm: {
        borderBottom: "solid 1px light"
      },
    }))
  const classes = useStyles();
  return (
    <form className={classes.root} autoComplete="off" {...other}>
      <div className={classes.headerForm}>
        <Typography variant="h6">{title}</Typography>
      </div>
      {children}
    </form>
  )
}