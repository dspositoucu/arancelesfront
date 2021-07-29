import React, { useState, useEffect, ChangeEvent } from 'react'
import { Divider, Grid, Typography, } from '@material-ui/core';

// Import Componentes
import Controls from '../../componentes/Forms/Controls'
import ButtonIcon from '../Buttons/ButtonIcon';

// Custom hooks
import { useForm, Form } from '../../hooks/useForm'
import useSubmit from '../../hooks/useSubmit';
//Actions

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
    total: '0.00'

}

const ReciboGeneral = () => {
    const {
        values,
        setValues,
        handleChangeForm,
        resetForm,
    } = useForm(initialFValues, true);

    const [descripcion, setDescripcion] = useState([
        { id: '1', descripcion: "Arancel", monto: "0.00" },
        { id: '2', descripcion: "Bonificacion", monto: "0.00" },
        { id: '3', descripcion: "Intereses", monto: "0.00" },
        { id: '4', descripcion: "Biblioteca", monto: "0.00" },
        { id: '5', descripcion: "Moratoria", monto: "0.00" },
    ])

    const [nuevaDescripcion, setNuevaDescripcion] = useState({
        descripcion: "",
        monto: "0.00",
    })
    const agregarDescripcion = () => {
        setDescripcion([
            ...descripcion,
            {
                id: (descripcion.length + 1).toString(),
                descripcion: nuevaDescripcion.descripcion,
                monto: nuevaDescripcion.monto
            }])
    }

    const quitarDescripcion = (idDesc) => {
        setDescripcion(
            descripcion.filter(desc => desc.id !== idDesc)
        )
    }

    const sumarMontos = () => {
        let monto = 0 
        descripcion.forEach(desc=>{
            monto += parseFloat(desc.monto)     
        })
        return monto
    }

    const handleChangeDesc = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target

        setNuevaDescripcion({
            ...nuevaDescripcion,
            [name]: value,
        })

    }


    return (
        <Form
            title="Recibo General">
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
                                label="Fecha de Ven."
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

                {/*============================================== DETALLES DE FACTURA ============================================== */}


                <Grid item xs={12}>
                    <Divider orientation="horizontal" light={true} />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={'h4'}>
                        Detalle de Factura / Recibo
                    </Typography>
                </Grid>
                <Grid item container direction="row" spacing={1} xs={12}>
                    <Grid item xs={3}>
                        <Typography variant={'h6'}>
                            Descripciones
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Controls.Input
                            name="descripcion"
                            label="Descripcion"
                            value={nuevaDescripcion.descripcion}
                            onChange={handleChangeDesc}
                        />
                    </Grid>
                    <Grid direction="row" style={{display:"flex", alignItems:'baseline'}} item xs={1} >
                        <Typography>$</Typography>
                        <Controls.Input
                            name="monto"
                            value={nuevaDescripcion.monto}
                            onChange={handleChangeDesc}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <ButtonIcon
                            startIcon="agregar"
                            label="Agregar Descripcion"
                            onClick={agregarDescripcion}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Divider orientation="horizontal" light={true} />
                </Grid>
                {/* =========================================================== ITEM DESCRIPCIONES =========================================================== */}
                <Grid container spacing={1} xs={12}>
                    {
                        descripcion.map((desc, i) => {
                            return (
                                <Grid spacing={1} xs={4} alignItems="center" container key={i} item>
                                    <Grid item xs={2}>
                                        <Typography variant={"subtitle2"}>
                                            {desc.descripcion}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Divider orientation="horizontal" light={true} />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Typography variant={"subtitle2"}>
                                            {desc.monto}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <ButtonIcon
                                            startIcon="quitar"
                                            onClick={() => quitarDescripcion(desc.id)}
                                        />
                                    </Grid>

                                </Grid>)
                        })
                    }
                    {/* =========================================================== TOTAL =========================================================== */}

                </Grid>
                <Grid item xs={12}>
                    <Divider orientation="horizontal" light={true} />
                </Grid>
                <Grid container item justify="space-between">
                    <Grid item xs={4} >
                        <Typography>Total</Typography>
                    </Grid>
                    <Grid item style={{ textAlign: 'end' }} xs={2}>
                        <Typography>${sumarMontos()}</Typography>
                    </Grid>
                </Grid>
                {/* =========================================================== BOTONES =========================================================== */}

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