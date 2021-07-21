import { FC } from 'react'
import {
  Box,
  Button,
  Grid,
  Typography,
} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


//Custom hooks 
import { useForm } from '../../hooks/useForm'

//components
import InputForm from '../../componentes/Forms/InputForm'

//actions
import { addPersona } from '../../Redux/actions/personas/ActionCreator'

//interface 

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    containernInput: {
      margin: "10px 10px",
      display: 'flex',
      justifyContent: 'center',
    },
    form: {
      width: '100%',
      marginTop: 10,
      textAlign: 'center',
      flexWrap: 'wrap'
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
      width: '80vw',
      background: "#FFF",
      padding: 15,
      borderRadius: 10,
    },
    title: {
      color: "#25213B",
      fontWeight: 400
    },

  }));

const FormRegister = () => {

  const classes = useStyles();

  const { formData, handleChangeForm, handleSubmit } = useForm({
    nombre:  '',
    ndoc:  '',
    telefono: '',
    email:  '',
    domicilio:  '',
    sexo:  '',
    fecnac:  '',
    cuit:  '',
    tipodoc:  '',
    idperaul:  '',
    codigo:  '',
    baja:  '',
  }, addPersona)

  return (
    <Box className={classes.container} height="80%">
      <Typography className={classes.title} variant="h5">
        Formulario Generico
      </Typography>
      <form
        className={classes.form}
        onSubmit={()=>{}}
      >
        <Grid container>
              <Grid
                className={classes.containernInput}
                item
                xs={12}
                sm={5}
              >
                <InputForm
                  size="medium"
                  name="Cuota"
                  label="Cuota"
                  placeholder="Cuota"
                  required
                  type="text"
                />
              </Grid>
          <Button
            type="submit"
            fullWidth
            className={classes.submit}>
            Enviar Formulario
          </Button>
        </Grid>
      </form>
    </Box>
  )
}

export default FormRegister