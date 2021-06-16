import { useState, ChangeEvent, FormEvent } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import {
  CssBaseline,
  Button,
  Container,
  Typography,
  Grid,
} from '@material-ui/core';
import { makeStyles, Theme, createStyles} from '@material-ui/core/styles';

import InputForm from './InputForm'

//actions
import { addPerson } from '../../Redux/actions/personActionCreator'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    containernInput: {
      margin: "10px 10px",
      display: 'flex',
      justifyContent: 'center',
    },
    form: {
      marginTop: 10,
      textAlign: 'center'
    },
    submit: {
      background: "#6E6893",
      color: "#e3e0ee",
      '&:hover': {
        backgroundColor: '#3c356d',
      },
      marginTop: 10
    },
    container: {
      boxShadow: '0px 4px 25px rgba(148, 130, 255, 0.51)',
      background: "#FFF",
      padding: 15,
      borderRadius: 10,
    },
    title: {
      color: "#25213B",
      fontWeight: 400
    },

  }));

const Register = () => {

  const classes = useStyles();

  const [formData, setFormData] = useState({
    id: (Math.random() * (10000000 - 100) + 100).toFixed(0),
    nombre: '',
    n_doc: '',
    telefono: '',
    email: '',
    domicilio: '',
  })

  const history = useHistory()

  const dispatch = useDispatch()

  const handleChangeForm = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  const handleSubmite = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    dispatch(addPerson(formData))
    history.push("./table")
  }

  console.log(formData)
  return (
    <Container className={classes.container} component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography className={classes.title} variant="h5">
          Registrar Nueva Persona
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmite}
        >
          <Grid className={classes.containernInput}>
            <InputForm
              size="medium"
              label="Nombre"
              onChange={handleChangeForm}
              name="nombre"
              required
              id="firstName"
              placeholder="Nombre completo"
            />
          </Grid>
          <Grid className={classes.containernInput}>
            <InputForm
              size="medium"
              label="Email"
              onChange={handleChangeForm}
              required
              id="email"
              type="email"
              placeholder="Email"
              name="email"
            />
          </Grid>
          <Grid className={classes.containernInput}>
            <InputForm
              size="medium"
              label="Sexo"
              onChange={handleChangeForm}
              required
              name="sexo"
              placeholder="Sexo"
              type="Sexo"
              id="sexo"
            />
            <InputForm
              size="medium"
              label="Fecha de Nacimiento"
              onChange={handleChangeForm}
              required
              name="fecha_nac"
              placeholder="Fecha de Nacimiento"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              id="fecha_nac"
            />
          </Grid>
          <Grid className={classes.containernInput}>
            <InputForm
              size="medium"
              label="Nº de Documento"
              onChange={handleChangeForm}
              required
              name="n_doc"
              placeholder="Nº de Documento"
              id="n_doc"
            />
          </Grid>

          <Grid className={classes.containernInput}>
            <InputForm
              size="medium"
              label="Telefono"
              onChange={handleChangeForm}
              required
              name="telefono"
              placeholder="Telefono"
              id="telefono"
            />
          </Grid>

          <Grid className={classes.containernInput}>
            <InputForm
              size="medium"
              label="Domicilio"
              onChange={handleChangeForm}
              required
              name="domicilio"
              placeholder="Domicilio"
              id="domicilio"
            />
          </Grid>
          <Grid className={classes.containernInput}>
            <InputForm
              size="medium"
              label="Cuit"
              onChange={handleChangeForm}
              required
              name="Cuit"
              placeholder="Cuit"
              id="cuit"
            />
          </Grid>

          <Grid className={classes.containernInput}>
            <InputForm
              size="medium"
              label="Situcion tributaria"
              onChange={handleChangeForm}
              required
              name="situacion_tributaria"
              placeholder="Situcion tributaria"
              id="sit_tributaria"
            />
          </Grid>
          <Button
            type="submit"
            fullWidth
            className={classes.submit}>
            Registrar
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default Register