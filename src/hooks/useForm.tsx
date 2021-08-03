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

export const Form = ({ width='100%', children, title, ...other }) => {
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
        <Typography variant="h4">{title}</Typography>
      </div>
      {children}
    </form>
  )
}