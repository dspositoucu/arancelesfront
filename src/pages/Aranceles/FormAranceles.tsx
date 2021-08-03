import { Grid, Divider, Typography } from '@material-ui/core';
import Controls from '../../componentes/Forms/Controls'
import { useForm, Form } from '../../hooks/useForm'

//acciones
import { getCuentasListSelect } from '../../Redux/actions/cuentas/CuentasActionCreator';


const initialFValues = {
    idcuenta: '',
    cuota: '0',
    monto: '0',
    bonificacion: '0',
    recargo: '0',
    biblioteca: '0',
    mes: '',
    anio: '',
    descripcion: '',
    actual: '',
    debitado: '',
    debita: ''
}

const FormAranceles = ({ selectList }) => {

    
    const {
        values,
        setValues,
        handleChangeForm,
        resetForm,
    } = useForm(initialFValues,true);
    
    
    console.log("valores formulario ",values)
    return (
        <Form
            title="Formulario de Aranceles"
            onSubmit={() => { }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Divider orientation="horizontal" />
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={12}>
                        <Controls.AutocompleteSelect
                            name="idcuenta"
                            label="Cuenta"
                            onChange={handleChangeForm}
                            promSelectList={getCuentasListSelect()}
                            filtro={"descripcion"}
                        />
                    </Grid>

                </Grid>
                <Grid container item alignItems="center" >
                    <Grid item xs={2}>
                        <Typography variant="subtitle1">
                            Cuota
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Controls.Input
                            InputLabelProps={{ shrink: false }}
                            name="cuota"
                            value={values.cuota}
                            onChange={handleChangeForm}
                        />
                    </Grid>
                </Grid>
                <Grid container item alignItems="center" xs={12}>
                    <Grid item xs={2}>
                        <Typography variant="subtitle1">
                            Monto
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Controls.Input
                            InputLabelProps={{ shrink: false }}
                            name="monto"
                            value={values.monto}
                            onChange={handleChangeForm}
                        />
                    </Grid>
                </Grid>
                <Grid container item alignItems="center" xs={12}>
                    <Grid item xs={2}>
                        <Typography variant="subtitle1">
                            Bonificacion
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Controls.Input
                            InputLabelProps={{ shrink: false }}
                            name="bonificacion"
                            value={values.bonificacion}
                            onChange={handleChangeForm}
                        />
                    </Grid>
                </Grid>
                <Grid container item alignItems="center" xs={12}>
                    <Grid item xs={2}>
                        <Typography variant="subtitle1">
                            Recargo
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Controls.Input
                            InputLabelProps={{ shrink: false }}
                            name="recargo"
                            value={values.recargo}
                            onChange={handleChangeForm}
                        />
                    </Grid>
                </Grid>
                <Grid container item alignItems="center" xs={12}>
                    <Grid item xs={2}>
                        <Typography variant="subtitle1">
                            Biblioteca
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Controls.Input
                            InputLabelProps={{ shrink: false }}
                            name="biblioteca"
                            value={values.biblioteca}
                            onChange={handleChangeForm}
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={12}>
                    <Controls.Input
                        label="Descripcion"
                        name="descripcion"
                        value={values.descripcion}
                        onChange={handleChangeForm}
                    />
                </Grid>
                <Grid container item xs={12}>

                    <Controls.Input
                        label="Mes"
                        name="mes"
                        value={values.mes}
                        onChange={handleChangeForm}
                    />
                </Grid>
                <Grid container item xs={12}>
                    <Controls.Input
                        label="Año"
                        name="anio"
                        value={values.anio}
                        onChange={handleChangeForm}
                    />
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={4}>
                        <Controls.Checkbox
                            name="actual"
                            label="Actual"
                            value={values.actual}
                            onChange={handleChangeForm}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Controls.Checkbox
                            name="debitado"
                            label="Debitado"
                            value={values.debitado}
                            onChange={handleChangeForm}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Controls.Checkbox
                            name="debita"
                            label="Debita"
                            value={values.debita}
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
                            text="Crear Nuevo Arancel" />
                    </Grid>
                </Grid>
            </Grid>
        </Form>
    )
}
export default FormAranceles