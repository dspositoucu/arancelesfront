import { useSelector } from 'react-redux';
import { Grid,Typography, Divider } from '@material-ui/core';

//Model
import { AppState } from '../../Redux/state/AppState';

// Import Componentes
import Controls from '../Forms/Controls'

// Custom hooks
import { useForm, Form } from '../../hooks/useForm'
import useSubmit from '../../hooks/useSubmit';

const initialFValues = {
    codigo: '',
    codfac: '',
    codcar: '',
    concepto: '',
    debe: '',
    haber: '',
    fechamov: ''
}

const FromMovimientosCtacte = () => {
    const {
        values,
        handleChangeForm,
        resetForm,
    } = useForm(initialFValues, true);

    console.log("VALOR DE FORMULARIO ", values)
    return (
        <Form
            title="Agregar Movimientos de Cta.Cte. de Personas"
            ButtonSubmit="Agregar Mov Cta.cte."
            onSubmit={()=>{}}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Divider orientation="horizontal" light={true} />
                </Grid>

                <Grid container item xs={12} spacing={1}>
                    <Grid item xs={3}>
                        <Controls.Input
                            name="codigo"
                            label="Codigo"
                            value={values.codigo}
                            onChange={handleChangeForm} />
                    </Grid>
                    <Grid item xs={3}>
                        <Controls.Input
                            label="Codigo de Carrera"
                            name="codcar"
                            value={values.codcar}
                            onChange={handleChangeForm}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Controls.Input
                            name="codfac"
                            label="Codigo Facultad"
                            value={values.codfac}
                            onChange={handleChangeForm} />
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={1}>
                    <Grid item xs={9}>
                    <Controls.Input
                            label="Concepto"
                            name="concepto"
                            value={values.concepto}
                            onChange={handleChangeForm}
                        />
                    </Grid>
                </Grid>
                <Grid container alignItems="center" item xs={12}>
                    <Grid item xs={3}>
                        <Typography>
                            Fecha del Movimiento
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Controls.Input
                            name="fecmov"
                            type="date"
                            InputLabelProps={{
                                shrink: false,
                            }}
                            value={values.fecmov}
                            onChange={handleChangeForm}
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={1}>
                    <Grid item xs={3}>
                        <Controls.Input
                            label="Debe"
                            name="debe"
                            value={values.debe}
                            onChange={handleChangeForm}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Controls.Input
                            label="Haber"
                            name="haber"
                            value={values.haber}
                            onChange={handleChangeForm}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Divider orientation="horizontal" light={true} />
                </Grid>

                <Grid spacing={1} container xs={12} item>
                    <Grid item xs={3}>
                        <Controls.Button
                            onClick={() => { }}
                            variant="primary"
                            text="Cancelar" />
                    </Grid>
                    <Grid item container justify="flex-end" direction='row' xs={9}>
                        <Controls.Button
                            text="Limpiar Formulario"
                            variant="secondary"
                            onClick={resetForm} />
                        <Controls.Button
                            type="submit"
                            variant="primary"
                            text="Agregar Mov Cta.cte." />
                    </Grid>
                </Grid>
            </Grid>
        </Form>

    )
}

export default FromMovimientosCtacte