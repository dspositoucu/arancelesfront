import { Grid } from '@material-ui/core';
import Controls from '../../componentes/Forms/Controls'
import { useForm, Form } from '../../hooks/useForm'

const initialFValues = {
    idcuenta: 'SIN CUENTA-00',
    cuota: '',
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
    } = useForm(initialFValues, true);
    return (
        <Form
            title="Formulario de Aranceles"
            onSubmit={() => { }}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Select
                        name="idcuenta"
                        label="Cuenta"
                        value={values.idcuenta}
                        onChange={handleChangeForm}
                        options={selectList}
                    />
                    <Controls.Input
                        name="Cuota"
                        label="Cuota"
                        value={values.Cuota}
                        onChange={handleChangeForm}
                    />
                    <Controls.Input
                        label="Monto"
                        name="monto"
                        value={values.monto}
                        onChange={handleChangeForm}
                    />
                    <Controls.Input
                        label="Recargo"
                        name="recargo"
                        value={values.recargo}
                        onChange={handleChangeForm}
                    />
                    <Controls.Input
                        label="Biblioteca"
                        name="biblioteca"
                        value={values.biblioteca}
                        onChange={handleChangeForm}
                    />
                    <Controls.Input
                        label="Bonificacion"
                        name="bonificacion"
                        value={values.bonificacion}
                        onChange={handleChangeForm}
                    />

                </Grid>
                <Grid item xs={6}>
                    <Controls.Input
                        label="Descripcion"
                        name="descripcion"
                        value={values.descripcion}
                        onChange={handleChangeForm}
                    />
                    <Controls.Input
                        label="Mes"
                        name="mes"
                        value={values.mes}
                        onChange={handleChangeForm}
                    />
                    <Controls.Input
                        label="Año"
                        name="anio"
                        value={values.anio}
                        onChange={handleChangeForm}
                    />
                    <Controls.Checkbox
                        name="actual"
                        label="Actual"
                        value={values.actual}
                        onChange={handleChangeForm}
                    />
                    <Controls.Checkbox
                        name="debitado"
                        label="Debitado"
                        value={values.debitado}
                        onChange={handleChangeForm}
                    />
                    <Controls.Checkbox
                        name="debita"
                        label="Debita"
                        value={values.debita}
                        onChange={handleChangeForm}
                    />

                </Grid>
                <Grid container xs={12}>
                    <Grid xs={6}>
                        <Controls.Button
                            onClick={() => { }}
                            variant="primary"
                            text="Cancelar" />
                    </Grid>
                    <Grid container justify="flex-end" xs={6}>
                        <Controls.Button
                            text="Limpiar Formulario"
                            variant="secondary"
                            onClick={resetForm} />
                        <Controls.Button
                            type="submit"
                            variant="primary"
                            text="Nuevo Arancel" />
                    </Grid>
                </Grid>
            </Grid>
        </Form>
    )
}
export default FormAranceles