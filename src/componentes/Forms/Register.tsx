import { FC } from 'react'
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

//components
import InputForm from './InputForm'

//actions
import { addPersona } from '../../Redux/actions/ActionCreator'

//interface 
import IFormRegister from '../CustomTable/interface/IFormRegister';
import IPersona from '../../api/models/IPersona';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width:400
    },
    containernInput: {
      margin: "10px 10px",
      display: 'flex',
      justifyContent: 'center',
    },
    form: {
      width:'100%',
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
  configForm?:IFormRegister,
  dataFields?:IPersona | {}

}

const Register:FC<Props> = ({ configForm, dataFields={} }) => {

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
         configForm && configForm.fields.map((fieldsData, index) => 
          <Grid
            key={index} 
            className={classes.containernInput}>
              
            <InputForm
              size="medium"
              name={fieldsData.name}
              label={fieldsData.label}
              placeholder={fieldsData.label}
              type={fieldsData.type || ''}
              required
              value={ dataFields[fieldsData.name as keyof Object] === null ?  '': dataFields[fieldsData.name as keyof Object]}
              onChange={handleChangeForm}
              InputLabelProps={ fieldsData.name === 'fecnac' ?{
                shrink: true,
              }: {}}
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