import { useDispatch } from 'react-redux';
import { ChangeEvent, useState, FormEvent, FC, ReactNode } from 'react';
import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useForm = (initialFValues, validateOnChange = false, validate) => {


  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState({});

  const handleChangeForm = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = target
    setValues({
      ...values,
      [name]: value
    })
    if (validateOnChange)
      validate({ [name]: value })
  }

  const resetForm = () => {
    setValues(initialFValues);
    setErrors({})
  }


  return {
    values,
    setValues,
    errors,
    setErrors,
    handleChangeForm,
    resetForm

  }
}


const useStyles = makeStyles((theme: Theme) => 
createStyles({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1)
    }
  }
}))


export const Form = ({ children, ...other }) => {
  const classes = useStyles();
  return (
    <form className={classes.root} autoComplete="off" {...other}>
        {children}
    </form>
) 
}