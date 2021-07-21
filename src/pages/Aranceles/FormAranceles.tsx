import { FC, useState, ChangeEvent } from 'react'
import {
    Box,
    Button,
    Grid,
    Typography,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Select,
    MenuItem,

} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


//Custom hooks 
import { useForm } from '../../hooks/useForm'

//components
import InputForm from '../../componentes/Forms/InputForm'

//actions
import { addPersona } from '../../Redux/actions/personas/ActionCreator'

//interface 

interface Props {
    selectList: string[]
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        containernInput: {
            margin: "10px 10px",
            display: 'flex',
            justifyContent: 'center',
        },
        form: {
            display: "flex",
            flexDirection: "column",
            width: '100%',
            marginTop: 10,
            height: '95%',
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
            maxWidth: "80vw",
            minWidth: "40vw",
            height: "90vh",
            background: "#FFF",
            padding: 15,
            borderRadius: 10,
        },
        title: {
            color: "#25213B",
            fontWeight: 400
        },
        ButtonsFrom: {
            display: "flex",
            justifyContent: "space-between"
        },
        checkBoxGroup: {
            width: "100%",
            justifyContent: "space-around",
            display: "flex",
        },
        selectProps:{
            height:200
        }

    }));

const FormRegister: FC<Props> = ({ selectList }) => {

    const classes = useStyles();
    const [state, setState] = useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const [nombreCuenta, setNombreCuenta] = useState<string[]>([]);

    const handleChangeSelect = (event: ChangeEvent<{ value: unknown }>) => {
        setNombreCuenta(event.target.value as string[]);
    };

    const { formData, handleChangeForm, handleSubmit } = useForm({
        nombre: '',
        ndoc: '',
        telefono: '',
        email: '',
        domicilio: '',
        sexo: '',
        fecnac: '',
        cuit: '',
        tipodoc: '',
        idperaul: '',
        codigo: '',
        baja: '',
    }, addPersona)

    return (
        <Box className={classes.container} height="80%">
            <Typography className={classes.title} variant="h5">
                Formulario Aranaceles
            </Typography>
            <form
                className={classes.form}
                onSubmit={() => { }}
            >

                <Select
                    labelId="demo-mutiple-name-label"
                    id="demo-mutiple-name"
                    defaultValue="SIN CUENTA-00"
                    value={nombreCuenta[0]}
                    onChange={handleChangeSelect}
                    MenuProps={{
                        style: { zIndex: 900001 },
                        disableScrollLock: false,
                        classes:{paper:classes.selectProps}
                    }}
                >
                    {selectList.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>

                <InputForm
                    size="medium"
                    required
                    type="text"
                    name="cutoa"
                    label="Cuota"
                    placeholder="Cuota"
                />
                <InputForm
                    size="medium"
                    required
                    type="text"
                    name="monto"
                    label="Monto"
                    placeholder="Monto"
                />
                <InputForm
                    size="medium"
                    required
                    type="text"
                    name="bonificacion"
                    label="Bonificacion"
                    placeholder="Bonificacion"
                />
                <InputForm
                    size="medium"
                    required
                    type="text"
                    name="recargo"
                    label="Recargo"
                    placeholder="Recargo"
                />
                <InputForm
                    size="medium"
                    required
                    type="text"
                    name="bibilioteca"
                    label="Bibilioteca"
                    placeholder="Bibilioteca"
                />
                <InputForm
                    size="medium"
                    required
                    type="text"
                    name="mes"
                    label="Mes"
                    placeholder="Mes"
                />
                <InputForm
                    size="medium"
                    required
                    type="text"
                    name="anio"
                    label="Anio"
                    placeholder="Anio"
                />
                <InputForm
                    size="medium"
                    required
                    type="text"
                    name="descripcion"
                    label="Descripcion"
                    placeholder="Descripcion"
                />

                <FormGroup row>
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                        label="Actual"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" />}
                        label="Debitado"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedC} onChange={handleChange} name="checkedC" />}
                        label="Debita"
                    />
                </FormGroup>
                <div className={classes.ButtonsFrom} >
                    <Button
                        color="default"
                        className={classes.submit}
                    >
                        Limpiar Campos
                    </Button>
                    <Button
                        type="submit"
                        className={classes.submit}
                    >
                        Nuevo Arancel
                    </Button>
                </div>
            </form>
        </Box>
    )
}

export default FormRegister