import React, { useState, useEffect, ChangeEvent } from 'react'
import { Divider, Grid, InputAdornment, Typography, } from '@material-ui/core';

// Import Componentes
import Controls from '../../componentes/Forms/Controls'
import ButtonIcon from '../Buttons/ButtonIcon';
import FormContainer from '../Forms/FormContainer';
// Custom hooks
import { useForm } from '../../hooks/useForm'
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
    } = useForm(initialFValues);

    const [descripcion, setDescripcion] = useState([
        { id: '1', descripcion: "Arancel", monto: "0.00" },
        { id: '2', descripcion: "Bonificacion", monto: "0.00" },
        { id: '3', descripcion: "Intereses", monto: "0.00" },
        { id: '4', descripcion: "Biblioteca", monto: "30.00" },
        { id: '5', descripcion: "Moratoria", monto: "0.00" },
    ])
    const [nuevaDescripcion, setNuevaDescripcion] = useState({
        descripcion: "",
        monto: "0.00",
    })
    const agregarDescripcion = () => {
        console.log("DESCRIPCIONES ", descripcion)
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
        descripcion.forEach(desc => {
            monto += desc.monto ? parseFloat(desc.monto) : 0
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

    const handleChangeMonto = (event: ChangeEvent<HTMLInputElement>,id):any => {
        const { value } = event.target
        setDescripcion(descripcion.map(desc=>{
            if(desc.id === id){
                desc.monto = value
            }
            return desc 
        }))
    }

    return (
        <FormContainer
            width="80vw"
            LabelButtonSubmit="Generar Recibo"
            resetForm={resetForm}
            title="Recibo General">
            <Grid container spacing={2}>

                {/*============================================== fila ============================================== */}
                <Grid item xs={1}>
                    <Controls.Input
                        verySmall
                        name="codalu"
                        label="CodAlu"
                        value={values.codalu}
                        onChange={handleChangeForm}
                    />
                </Grid>
                <Grid item xs={3}>
                    <Controls.Input
                        verySmall
                        label="Nombre"
                        name="nombre"
                        value={values.nombre}
                        onChange={handleChangeForm}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controls.Input
                        verySmall
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
                                verySmall
                                label="Nro"
                                name="nro"
                                value={values.nro}
                                onChange={handleChangeForm}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Controls.Input
                                verySmall
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
                        verySmall
                        label="Cuotas"
                        name="cantcuotas"
                        value={values.cantcuotas}
                        onChange={handleChangeForm}
                    />
                </Grid>

                <Grid item xs={4}>
                    <Controls.Input
                        verySmall
                        label="Forma de pago"
                        name="modopago"
                        value={values.modopago}
                        onChange={handleChangeForm}
                    />

                </Grid>
                <Grid item container xs={6}>
                    <Grid container direction="row" justify="flex-end" spacing={1}>
                        <Grid item xs={4}>
                            <Controls.Input
                                verySmall
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
                                verySmall
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
                                verySmall
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
                        verySmall
                        label="Pago Efectivo"
                        name="pagoefectivo"
                        value={values.pagoefectivo}
                        onChange={handleChangeForm}
                    />
                </Grid>

                <Grid item xs={2}>
                    <Controls.Input
                        verySmall
                        label="Beneficio"
                        name="beneficio"
                        value={values.beneficio}
                        onChange={handleChangeForm}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Controls.Input
                        verySmall
                        label="Arancel"
                        name="arancel"
                        value={values.arancel}
                        onChange={handleChangeForm}
                    />
                </Grid>

                <Grid item xs={2}>
                    <Controls.Input
                        verySmall
                        label="Debito"
                        name="debito"
                        value={values.debito}
                        onChange={handleChangeForm}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Controls.Input
                        verySmall
                        label="Otro Pago"
                        name="otropago"
                        value={values.otropago}
                        onChange={handleChangeForm}
                    />
                </Grid>

                {/*============================================== fila ============================================== */}
                <Grid item container xs={5}>
                    <Grid container direction="row" spacing={1}>
                        <Grid item xs={4}>
                            <Controls.Input
                                verySmall
                                label="Recibo"
                                name="recibo"
                                value={values.recibo}
                                onChange={handleChangeForm}
                            />
                        </Grid>
                        <Grid item xs={8} >
                            <Controls.Input
                                verySmall
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
                                verySmall
                                label="Mes"
                                name="mes"
                                value={values.mes}
                                onChange={handleChangeForm}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Controls.Input
                                verySmall
                                label="dia"
                                name="interes"
                                value={values.dia}
                                onChange={handleChangeForm}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Controls.Input
                                verySmall
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
                            verySmall
                            name="descripcion"
                            label="Descripcion"
                            value={nuevaDescripcion.descripcion}
                            onChange={handleChangeDesc}
                        />
                    </Grid>
                    <Grid direction="row" item xs={1} >
                        <Controls.Input
                            verySmall
                            name="monto"
                            value={nuevaDescripcion.monto}
                            onChange={handleChangeDesc}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">$</InputAdornment>
                                )
                            }}
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
                                    <Grid item xs={4}>
                                        <Controls.Input
                                            verySmall
                                            name={desc.id}
                                            value={desc.monto}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">$</InputAdornment>
                                                )
                                            }}
                                            onChange={(e) => { handleChangeMonto(e,desc.id) }}
                                        />


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
            </Grid>

        </FormContainer >
    )
}
export default ReciboGeneral