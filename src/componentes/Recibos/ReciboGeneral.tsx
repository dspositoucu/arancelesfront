import React, { useState, useEffect, ChangeEvent } from 'react'
import { Divider, Grid, InputAdornment, Typography, } from '@material-ui/core';

// Import Componentes
import Controls from '../../componentes/Forms/Controls'
import ButtonIcon from '../Buttons/ButtonIcon';
import FormContainer from '../Forms/FormContainer';
// Custom hooks
import { useForm } from '../../hooks/useForm'
//Actions
import { getAllModosPagos,setDataReciboGeneral } from '../../Redux/actions/caja/CajasActionCreator';


const initialFValues = {
    codalu: '',
    cuenta: '',
    fecha: '',
    modopago: '',
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

const ReciboGeneral = ({ data }) => {

     const cargarDatos = () =>{
        setDataReciboGeneral(data.idcuentapersona)
            .then(resp=>setValues({...initialFValues,...resp[0]}))
            .catch(err=>console.log(err))
    }

    useEffect(()=>{
        cargarDatos()
    },[])

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
    
    console.log("valores del formulario ",values)
    
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

    const handleChangeMonto = (event: ChangeEvent<HTMLInputElement>, id): any => {
        const { value } = event.target
        setDescripcion(descripcion.map(desc => {
            if (desc.id === id) {
                desc.monto = value
            }
            return desc
        }))
    }

    return (
        <FormContainer
            width="65vw"
            LabelButtonSubmit="Generar Recibo"
            resetForm={resetForm}
            title="Recibo General">
            <Grid container spacing={2}>
                {/*============================================== fila ============================================== */}
                <Grid item xs={2}>
                    <Controls.Input
                        name="codalu"
                        label="CodAlu"
                        value={values.codalu}
                        onChange={handleChangeForm}
                    />
                </Grid>
                <Grid item xs={4}>
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
                <Grid item xs={2}>
                    <Controls.Input
                        label="Cuotas"
                        name="cantcuotas"
                        value={values.cantcuotas}
                        onChange={handleChangeForm}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Controls.AutocompleteSelect
                        promSelectList={getAllModosPagos()}
                        name="modopago"
                        label="Forma de pago"
                        filtro={'descripcion'}
                        valueautocomplete={values.modopago}
                        onChange={(event, value = { nombre: '' }) => {
                            handleChangeForm({ target: { value: !value ? '' : value.nombre, name: 'modopago' } })
                        }}
                    />
                </Grid>
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

            {/* detalles del recibo */}

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


            <Grid container xs={12} spacing={2}>
                <Grid item xs={12}>
                    <Divider orientation="horizontal" light={true} />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={'h6'}>
                        Detalle de Factura / Recibo
                    </Typography>
                </Grid>
                {/* =========================================================== ITEM DESCRIPCIONES =========================================================== */}
                <Grid item container spacing={1} xs={12}>
                    {
                        descripcion.map((desc, i) => {
                            return (
                                <Grid spacing={1} xs={6} alignItems="center" container key={i} item>
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
                
                                            name={desc.id}
                                            value={desc.monto}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">$</InputAdornment>
                                                )
                                            }}
                                            onChange={(e) => { handleChangeMonto(e, desc.id) }}
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
                </Grid>
{/* =========================================================== agregar nueva descripcion =========================================================== */}
                <Grid container item spacing={1} xs={12}>
                    <Grid item xs={4}>
                        <Controls.Input

                            name="descripcion"
                            label="Descripcion"
                            value={nuevaDescripcion.descripcion}
                            onChange={handleChangeDesc}
                            />
                    </Grid>
                    <Grid item xs={2} >
                        <Controls.Input

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
            </Grid>
{/* =========================================================== TOTAL =========================================================== */}
            <Grid container item justify="space-between">
                <Grid item xs={4} >
                    <Typography>Total</Typography>
                </Grid>
                <Grid item style={{ textAlign: 'end' }} xs={2}>
                    <Typography>${sumarMontos()}</Typography>
                </Grid>
            </Grid>

        </FormContainer >
    )
}
export default ReciboGeneral