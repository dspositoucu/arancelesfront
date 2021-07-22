import { ChangeEvent, useState, FormEvent } from 'react';
import {
  CssBaseline,
  Button,
  Container,
  Typography,
  Grid,
} from '@material-ui/core';
import { makeStyles, Theme, createStyles} from '@material-ui/core/styles';
//action
import { loginUser } from '../../Redux/actions/users/userActionCreator';

//custom hooks
import { useForm } from '../../hooks/useForm'
import useSubmit from '../../hooks/useSubmit'

import InputForm from './InputForm'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    containernInput: {
      margin: "15px 10px",
      display: 'flex',
      justifyContent: 'center',
    },
    form: {
      marginTop: 10,
      textAlign: 'center',
    },
    submit: {
      background: "#6E6893",
      color: "#e3e0ee",
      '&:hover': {
        backgroundColor: '#3c356d',
      },
      borderRadius: 30,
      marginTop: 20
    },
    container: {
      boxShadow: '0px 4px 25px rgba(148, 130, 255, 0.51)',
      background: "#FFF",
      padding: 30,
      borderRadius: 10,
    },
    title: {
      color: "#25213B",
      fontWeight: 400
    },

  }));

const Login = () => {
  const classes = useStyles();
  
  const { values,handleChangeForm} = useForm({
    username:'',
    password:''
  })
  
  const { formSubmit } = useSubmit(loginUser,values)
 
  return (
    <Container className={classes.container} component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Typography className={classes.title} variant="h5">
       Sistema de Gestion UCU
      </Typography>
      <form
        className={classes.form}
        onSubmit={formSubmit}
      >
        <Grid className={classes.containernInput}>
          <InputForm
            label="Nombre de Usuario"
            onChange={handleChangeForm}
            name="username"
            required
            placeholder="Nombre de Usuario"
          />
        </Grid>
        <Grid className={classes.containernInput}>
          <InputForm
            label="Contraseña"
            onChange={handleChangeForm}
            required
            type="password"
            placeholder="Contraseña"
            name="password"
          />
        </Grid>
        <Button
          type="submit"
          fullWidth
          className={classes.submit}
           //onClick={()=>history.push('/table')} 
          >
          Ingresar
        </Button>
      </form>
    </div>
  </Container>
   )
 }

export default Login