import { FC, useState, ChangeEvent, FormEvent } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import {
  CssBaseline,
  Button,
  Container,
  Typography,
  Grid,
  TextField
} from '@material-ui/core';
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';

//actions
import { addPerson } from '../../Redux/actions/personActionCreator'


const WhiteTextField = withStyles({
  root: {
    margin: '0px 10px',
    borderRadius: 5,
    display: 'flex',
    flex: 1,
    '& .MuiInputBase-input': {
      marginLeft: 20,
      color: '#6E6893', // Text color
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#F2F0F9', // color del subrayado del input 
    },
    '& .MuiInput-underline:hover:before': {
      borderBottomColor: '#6E6893', // color del subrayado del input en hover
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#6E6893', // color del subrayado del input en focus
    },
  },
})(TextField);


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
      marginTop: theme.spacing(3),
      textAlign: 'center'
    },
    submit: {
      background: "#6E6893",
      color: "#e3e0ee",
      '&:hover': {
        backgroundColor: '#3c356d',
      },
      margin: theme.spacing(3, 0, 2),
    },
    container: {
      boxShadow: '0px 4px 25px rgba(148, 130, 255, 0.51)',
      background: "#FFF",
      padding: 20,
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

    console.log('Data enviada: ', formData)
  }

  console.log(formData)
  return (
    <Container className={classes.container} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography className={classes.title} variant="h4">
          Registrar Nueva Persona
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmite}
        >
          <Grid className={classes.containernInput}>
            <WhiteTextField
              label="Nombre"
              onChange={handleChangeForm}
              name="nombre"
              required
              id="firstName"
              placeholder="Nombre completo"
            />
          </Grid>
          <Grid className={classes.containernInput}>
            <WhiteTextField
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
            <WhiteTextField
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
            <WhiteTextField
              label="Sexo"
              onChange={handleChangeForm}
              required
              name="sexo"
              placeholder="Sexo"
              type="Sexo"
              id="sexo"
            />
          </Grid>
          <Grid className={classes.containernInput}>
            <WhiteTextField
              label="Nº de Documento"
              onChange={handleChangeForm}
              required
              name="n_doc"
              placeholder="Nº de Documento"
              id="n_doc"
            />
          </Grid>

          <Grid className={classes.containernInput}>
            <WhiteTextField
              label="Telefono"
              onChange={handleChangeForm}
              required
              name="telefono"
              placeholder="Telefono"
              id="telefono"
            />
          </Grid>

          <Grid className={classes.containernInput}>
            <WhiteTextField
              label="Domicilio"
              onChange={handleChangeForm}
              required
              name="domicilio"
              placeholder="Domicilio"
              id="domicilio"
            />
          </Grid>
          <Grid className={classes.containernInput}>
            <WhiteTextField
              label="Cuit"
              onChange={handleChangeForm}
              required
              name="Cuit"
              placeholder="Cuit"
              id="cuit"
            />
          </Grid>

          <Grid className={classes.containernInput}>
            <WhiteTextField
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