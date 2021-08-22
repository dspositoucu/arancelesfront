import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react'
import { Grid, Typography, Divider, Box } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import Icon from '../Icons/Icono'
//models
import { AppState } from '../../Redux/state/AppState';

// Import Componentes
import Controls from '../Forms/Controls'

// Custom hooks
import { useForm, Form } from '../../hooks/useForm'
import useSubmit from '../../hooks/useSubmit';

const FromMovimientosCtacte = () => {
    const { configForm } = useSelector((state: AppState) => state.CtacteState)
    const initialValue = {
        concepto: '',
        debe: '',
        haber: '',
        fechamov: '',
    }
    const {
        values,
        setValues,
        handleChangeForm,
        resetForm,
    } = useForm({
        ...initialValue,
        codigo: configForm.codigo,
        codfac: configForm.codfac,
        codcar: configForm.codcar
    });


    useEffect(() => {
        setValues({
            ...values,
            codigo: configForm.codigo,
            codfac: configForm.codfac,
            codcar: configForm.codcar
        })
    }, [configForm.id])


    return (
        <Form
            title="Agregar Movimientos de Cta.Cte. de Personas"
            ButtonSubmit="Agregar Mov Cta.cte."
            onSubmit={() => { }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Divider orientation="horizontal" light={true} />
                </Grid>
                <Grid container item xs={12} spacing={1}>
                    <Grid item xs={2}>
                        <Controls.Input
                            inputProps={{ style: { fontSize: 12 } }}
                            name="fecmov"
                            type="date"
                            InputLabelProps={{
                                shrink: false,
                                style: { fontSize: 12 }
                            }}
                            value={values.fecmov}
                            onChange={handleChangeForm}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Controls.Input
                            inputProps={{ style: { fontSize: 12 } }}
                            InputLabelProps={{ style: { fontSize: 12 } }}
                            label="Concepto"
                            name="concepto"
                            value={values.concepto}
                            onChange={handleChangeForm}
                        />
                    </Grid>
                    <Grid item xs={2} >
                        <Controls.Input
                            inputProps={{ style: { fontSize: 12 } }}
                            InputLabelProps={{ style: { fontSize: 12 } }}
                            label="Debe"
                            name="debe"
                            value={values.debe}
                            onChange={handleChangeForm}
                        />
                    </Grid>
                    <Grid item xs={2} >
                        <Controls.Input
                            inputProps={{ style: { fontSize: 12 } }}
                            InputLabelProps={{ style: { fontSize: 12 } }}
                            label="Haber"
                            name="haber"
                            value={values.haber}
                            onChange={handleChangeForm}
                        />
                    </Grid>
                    <Grid
                        alignItems='center'
                        justify='center'
                        container xs={1}
                        item >
                        <IconButton 
                            style={{padding:0}}
                        >
                            <Icon.limpiarForm />
                        </IconButton>
                    </Grid>
                    <Grid
                        alignItems='center'
                        justify='center'
                        container xs={1}
                        item>
                        <IconButton 
                            style={{padding:0}}
                        >
                            <Icon.Agregar />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Form >

    )
}

export default FromMovimientosCtacte