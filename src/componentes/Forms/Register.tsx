import { FC } from 'react'
import {
  CssBaseline,
  Button,
  Container,
  Typography,
  Grid,
} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


//Custom hooks 
import { useForm } from '../../hooks/useForm'

//components
import InputForm from './InputForm'

//actions
import { addPersona } from '../../Redux/actions/ActionCreator'

//interface 
import { AppState } from '../../Redux/state/AppState';
import IFormRegister from '../CustomTable/interface/IFormRegister';
import IPersona from '../../api/models/IPersona';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 400
    },
    containernInput: {
      margin: "10px 10px",
      display: 'flex',
      justifyContent: 'center',
    },
    form: {
      width: '100%',
      marginTop: 10,
      textAlign: 'center',
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

interface Props {
  configForm?: IFormRegister,
  dataFields?: IPersona | {}
  edit?:boolean
  
}

const Register: FC<Props> = ({ configForm, dataFields = {} }) => {
  const classes = useStyles();

  const { formData, handleChangeForm, handleSubmit } = useForm({
    nombre:     dataFields["nombre" as keyof Object]    || '',
    ndoc:       dataFields["ndoc" as keyof Object]      || '',
    telefono:   dataFields["telefono" as keyof Object]  || '',
    email:      dataFields["email" as keyof Object]     || '',
    domicilio:  dataFields["domicilio" as keyof Object] || '',
    sexo:       dataFields["sexo" as keyof Object]      || '',
    fecnac:     dataFields["fecnac" as keyof Object]    || '',
    cuit:       dataFields["cuit" as keyof Object]      || '',
    tipodoc:    dataFields["tipodoc" as keyof Object]   || '',
    idperaul:   dataFields["idperaul" as keyof Object]  || '',
    codigo:     dataFields["codigo" as keyof Object]    || '',
    baja:       dataFields["baja" as keyof Object]      || '',
  }, addPersona)

  let transformDate = dataFields["fecnac" as keyof Object] ? dataFields["fecnac" as keyof Object].toString() : ''

  return (
    <Container className={classes.container} component="main" maxWidth="lg">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography className={classes.title} variant="h5">
          {configForm && configForm.titleForm}
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit}
        >
          {
            configForm && configForm.fields.map((fields, index) =>
              <Grid
                key={index}
                className={classes.containernInput}>

                <InputForm
                  size="medium"
                  name={fields.name}
                  label={fields.label}
                  placeholder={fields.label}
                  type={fields.type || ''}
                  disabled={!fields.isEdit}
                  required
                  onChange={handleChangeForm}
                  InputLabelProps={fields.name === 'fecnac' ? { shrink: true } : {}}
                  defaultValue={fields.name === 'fecnac' 
                    ? transformDate && new Date(transformDate).toISOString().slice(0, 10) 
                    : dataFields[fields.name as keyof Object] === null
                    ? ''
                    : dataFields[fields.name as keyof Object]}
                />
              </Grid>)
          }
          <Button
            type="submit"
            fullWidth
            className={classes.submit}>
            {configForm && configForm.buttonSubmitLabel}
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default Register