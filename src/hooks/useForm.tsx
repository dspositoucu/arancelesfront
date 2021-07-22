import { useDispatch } from 'react-redux';
import { ChangeEvent, useState, FormEvent, FC, ReactNode } from 'react';
import { makeStyles, createStyles, Theme, Typography, Divider } from "@material-ui/core";
export const useForm = (initialFValues, validateOnChange = false) => {

  const [values, setValues] = useState(initialFValues);
  const handleChangeForm = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = target
    setValues({
      ...values,
      [name]: value
    })
  }
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiFormControl-root': {
        width: '80%',
        margin: theme.spacing(1),
      },
      background: "#FFF",
      width: '100%'
    },
    headerForm: {
      padding: theme.spacing(1),
      borderBottom: "solid 1px light"
    },
  }))

export const Form = ({ children, title, ...other }) => {
  const classes = useStyles();
  return (
    <form className={classes.root} autoComplete="off" {...other}>
      <div className={classes.headerForm}>
        <Typography variant="h4">{title}</Typography>
      </div>
      {children}
    </form>
  )
}