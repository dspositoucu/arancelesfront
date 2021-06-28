import {
  CssBaseline,
  Button,
  Container,
  Typography,
  Grid,
} from '@material-ui/core';
import { makeStyles, Theme, createStyles} from '@material-ui/core/styles';

//Custom hooks 
import { useForm } from '../../hooks/useForm'

import InputForm from './InputForm'

//actions
import { addPersona } from '../../Redux/actions/ActionCreator'

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

  const {formData, handleChangeForm, handleSubmit} = useForm({
    nombre: '',
    ndoc: '',
    telefono: '',
    email: '',
    domicilio: '',
    sexo:'',
    fecnac:'',
    cuit: ''
  },addPersona)


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
          onSubmit={handleSubmit}
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
              name="fecnac"
              placeholder="Fecha de Nacimiento"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              id="fecnac"
            />
          </Grid>
          <Grid className={classes.containernInput}>
            <InputForm
              size="medium"
              label="Nº de Documento"
              onChange={handleChangeForm}
              required
              name="ndoc"
              placeholder="Nº de Documento"
              id="ndoc"
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
              label="Tipo de Doc"
              onChange={handleChangeForm}
              required
              name="tipodoc"
              placeholder="Tipo de doc"
              id="tipodoc"
            />
          </Grid>
          <Grid className={classes.containernInput}>
            <InputForm
              size="medium"
              label="idperaul"
              onChange={handleChangeForm}
              required
              name="idperaul"
              placeholder="idperaul"
              id="idperaul"
            />
          </Grid>
          <Grid className={classes.containernInput}>
            <InputForm
              size="medium"
              label="Codigo"
              onChange={handleChangeForm}
              required
              name="codigo"
              placeholder="codigo"
              id="codigo"
            />
          </Grid>
          <Grid className={classes.containernInput}>
            <InputForm
              size="medium"
              label="Baja"
              onChange={handleChangeForm}
              name="baja"
              placeholder="baja"
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