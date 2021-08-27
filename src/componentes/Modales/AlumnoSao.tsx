import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../Redux/state/AppState'
import { Grid, Typography, Divider } from '@material-ui/core'
import Controls from '../Forms/Controls'

import { getCuentasListSelect } from '../../Redux/actions/cuentas/CuentasActionCreator'

const AlumnoSao = () => {

    const { selectAlumno } = useSelector((state: AppState) => state.AlumnosSaoState)

    const [values, setvalue] = useState<any>({
        apellido: '',
        idcuenta: '',
        nombre: '',
        ndoc: '',
        carreras: '',
        idAlumno: ''
    })
    return (
        <div style={{ height: '100%', padding: '15px' }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant={'h4'}>
                        Vinculacion de Alumno con una Cuenta
                    </Typography >
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={'h6'}>
                        Datos del alumno :
                    </Typography >
                </Grid>
                <Grid item xs={12}>
                    <Controls.Input
                        InputLabelProps={{
                            shrink: true,
                        }}
                        label="Apellido"
                        name="apellido"
                        variant="outlined"
                        value={values.apellido}
                        disabled
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controls.Input
                        InputLabelProps={{
                            shrink: true,
                        }}
                        label="Nombre"
                        name="nombre"
                        variant="outlined"
                        value={values.nombre}
                        disabled
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controls.Input
                        InputLabelProps={{
                            shrink: true,
                        }}
                        label="DNI"
                        name="ndoc"
                        variant="outlined"
                        value={values.ndoc}
                        disabled
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controls.Input
                        InputLabelProps={{
                            shrink: true,
                        }}
                        label="Carrera"
                        name="carreras"
                        variant="outlined"
                        value={values.carreras}
                        disabled
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controls.Input
                        InputLabelProps={{
                            shrink: true,
                        }}
                        label="IdAlumno"
                        name="idAlumnno"
                        variant="outlined"
                        value={values.idAlumno}
                        disabled
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={'h6'}>
                        Seleccionar cuenta para vincular
                    </Typography >
                </Grid>
                <Grid item xs={12}>
                    <Controls.AutocompleteSelect
                        name="idcuenta"
                        label="Cuenta"
                        promSelectList={getCuentasListSelect()}
                        valueautocomplete={values.idcuenta}
                        filtro={"descripcion"}
                        onChange={(event, value) => console.log(value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Controls.Button variant="primary" text="Vincular Alumno" />
                </Grid>
                <Grid item xs={12}>
                    <Controls.Button variant="primary" text="Nuevo Alumno" />
                </Grid>

            </Grid>
        </div>
    )
}
export default AlumnoSao