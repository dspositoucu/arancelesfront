import React, { useState, useEffect } from 'react'
import { Divider, Grid, Typography, } from '@material-ui/core';

// Import Componentes
import Controls from '../../componentes/Forms/Controls'
import { FormLabel } from '@material-ui/core';

// Custom hooks
import { useForm, Form } from '../../hooks/useForm'
import useSubmit from '../../hooks/useSubmit';
//Actions
import { addPersona } from '../../Redux/actions/personas/ActionCreator';


const initialFValues = {
    codalu: '',
    cuenta: '',
    fecha: '',
    modopago: '',
    nro: '',
    sobre: '',
    fechavto: '',
    cantcuotas: '',
    nombre: '',
    mes: '',
    beneficio: '',
    pagoefectivo: '',
    fechapago: '',
    matriculacompleta: '',
    derechoexamen: '',
    arancel: '',
    debito: '',
    recibido: '',
    concepto: '',
    interes: '',
    dia: '',
    otropago: '',
    cantdias: '',
    total: '0'

}

const ReciboGeneral = () => {
    const {
        values,
        setValues,
        handleChangeForm,
        resetForm,
    } = useForm(initialFValues, true);

    const { formSubmit } = useSubmit(addPersona, values)

    return (
        <Form
            title="Recibo General"
            onSubmit={formSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Divider orientation="horizontal" light={true} />
                </Grid>
                {/*============================================== fila ============================================== */}
                <Grid item xs={1}>
                    <Controls.Input
                        name="codalu"
                        label="CodAlu"
                        value={values.codalu}
                        onChange={handleChangeForm}
                    />
                </Grid>
                <Grid item xs={3}>
                    <Controls.Input
                        label="Nombre"
                        name="nombre"
                        value={values.nombre}
                        onChange={handleChangeForm}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controls.Input
                        label="Cuenta"
                        name="cuenta"
                        value={values.cuenta}
                        onChange={handleChangeForm}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Grid container justify="flex-end" spacing={1} direction={'row'}>
                        <Grid item xs={4}>
                            <Controls.Input
                                label="Nro"
                                name="nro"
                                value={values.nro}
                                onChange={handleChangeForm}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Controls.Input
                                label="Sobre"
                                name="sobre"
                                value={values.sobre}
                                onChange={handleChangeForm}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                {/*============================================== fila ============================================== */}

                <Grid item xs={2}>
                    <Controls.Input
                        label="Cuotas"
                        name="cantcuotas"
                        value={values.cantcuotas}
                        onChange={handleChangeForm}
                    />
                </Grid>

                <Grid item xs={4}>
                    <Controls.Input
                        label="Forma de pago"
                        name="modopago"
                        value={values.modopago}
                        onChange={handleChangeForm}
                    />

                </Grid>
                <Grid item xs={6}>
                    <Grid container direction="row" justify="flex-end" spacing={1}>
                        <Grid item xs={4}>
                            <Controls.Input
                                label="Fecha"
                                name="fecha"
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={values.fecha}
                                onChange={handleChangeForm}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Controls.Input
                                label="Fecha de Vencimiento"
                                name="fechavto"
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={values.fechavto}
                                onChange={handleChangeForm}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Controls.Input
                                label="Fecha de Pago"
                                name="fechapago"
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={values.fechapago}
                                onChange={handleChangeForm}
                            />
                        </Grid>

                    </Grid>
                </Grid>

                <Grid item xs={2}>
                    <Controls.Input
                        label="Pago Efectivo"
                        name="pagoefectivo"
                        value={values.pagoefectivo}
                        onChange={handleChangeForm}
                    />
                </Grid>

                <Grid item xs={2}>
                    <Controls.Input
                        label="Beneficio"
                        name="beneficio"
                        value={values.beneficio}
                        onChange={handleChangeForm}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Controls.Input
                        label="Arancel"
                        name="arancel"
                        value={values.arancel}
                        onChange={handleChangeForm}
                    />
                </Grid>

                <Grid item xs={2}>
                    <Controls.Input
                        label="Debito"
                        name="debito"
                        value={values.debito}
                        onChange={handleChangeForm}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Controls.Input
                        label="Otro Pago"
                        name="otropago"
                        value={values.otropago}
                        onChange={handleChangeForm}
                    />
                </Grid>

                {/*============================================== fila ============================================== */}
                <Grid item xs={5}>
                    <Grid container direction="row" spacing={1}>
                        <Grid item xs={4}>
                            <Controls.Input
                                label="Recibo"
                                name="recibo"
                                value={values.recibo}
                                onChange={handleChangeForm}
                            />
                        </Grid>
                        <Grid item xs={8} >
                            <Controls.Input
                                label="Concepto"
                                name="concepto"
                                value={values.concepto}
                                onChange={handleChangeForm}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid xs={7} item>
                    <Grid container direction="row" justify="flex-end" spacing={1}>
                        <Grid item xs={3}>
                            <Controls.Input
                                label="Mes"
                                name="mes"
                                value={values.mes}
                                onChange={handleChangeForm}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Controls.Input
                                label="dia"
                                name="interes"
                                value={values.dia}
                                onChange={handleChangeForm}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Controls.Input
                                label="Cant dias"
                                name="cantdias"
                                value={values.cantdias}
                                onChange={handleChangeForm}
                            />
                        </Grid>
                    </Grid>
                </Grid>


                {/*============================================== fila ============================================== */}


                <Grid item xs={4}>
                    <Controls.Checkbox
                        name="matriculacompleta"
                        label="Matricula Completa"
                        value={values.matriculacompleta}
                        onChange={handleChangeForm}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controls.Checkbox
                        name="derechoexamen"
                        label="Derecho de examen"
                        value={values.derechoexamen}
                        onChange={handleChangeForm}
                    />
                </Grid>

                {/*============================================== fila ============================================== */}


                <Grid item xs={12}>
                    <Divider orientation="horizontal" light={true} />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={'h4'}>
                        Detalle de Factura / Recibo
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={'h6'}>
                        Descripcion
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <FormLabel>
                        Arancel
                    </FormLabel>
                </Grid >
                <Grid item xs={2}>
                    <FormLabel>
                        Bonificacion
                    </FormLabel>
                </Grid>
                <Grid item xs={2}>
                    <FormLabel>
                        Intereses
                    </FormLabel>
                </Grid>
                <Grid item xs={2}>
                    <FormLabel>
                        Biblioteca
                    </FormLabel>
                </Grid>
                <Grid item xs={2}>
                    <FormLabel>
                        Moratoria
                    </FormLabel>
                </Grid>
                <Grid item xs={12}  >
                    <Grid container justify="flex-end">
                        <Grid item xs={3}>
                            <Controls.Input
                                label="Total"
                                name="total"
                                value={values.total}
                                onChange={handleChangeForm}
                            />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Divider orientation="horizontal" light={true} />
                </Grid>
                <Grid xs={6}>
                    <Controls.Button
                        onClick={() => { }}
                        variant="primary"
                        text="Cancelar" />
                </Grid>
                <Grid container justify="flex-end" xs={6}>
                    <Controls.Button
                        text="Limpiar Recibo"
                        variant="secondary"
                        onClick={resetForm} />
                    <Controls.Button
                        type="submit"
                        variant="primary"
                        text="Generar Recibo" />
                </Grid>
            </Grid>

        </Form >
    )
}
export default ReciboGeneral