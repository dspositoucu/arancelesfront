import { useSelector } from 'react-redux'
import { Grid, Typography } from '@material-ui/core'
import Controls from '../Forms/Controls'

import { getCuentasListSelect } from '../../Redux/actions/cuentas/CuentasActionCreator'

const AlumnoSao = () => {

    const values = {
        idcuenta:''
    }
    return (
        <div style={{height:'100%'}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant={'h4'}>
                        Nombre de la persona
                    </Typography >
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={'body1'}>
                        DNI : 123123123
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={'body1'}>
                        Carrera: cualquier carrera
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={'body1'}>
                        idAlumno: 123132
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={'body1'}>
                        Seleccionar cuenta
                    </Typography>
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
                    <Controls.Button variant="primary" text="Nuevo Alumno" />
                </Grid>

            </Grid>
        </div>
    )


}
export default AlumnoSao