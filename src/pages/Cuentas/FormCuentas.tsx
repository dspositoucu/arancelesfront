import React, { useState, useEffect } from 'react'
import { makeStyles, createStyles, Theme, Divider } from "@material-ui/core";
import { Grid, } from '@material-ui/core';

// Import Componentes
import Controls from '../../componentes/Forms/Controls'

// Custom hooks
import { useForm, Form } from '../../hooks/useForm'
import useSubmit from '../../hooks/useSubmit';

//Actions
import { getCuentasListSelect, getSedesListSelect } from '../../Redux/actions/cuentas/CuentasActionCreator';
import { getListaGruposBarrida } from '../../Redux/actions/barridas/BarridasActionCreator';
import { addCuentas } from '../../Redux/actions/cuentas/CuentasActionCreator'

const initialFValues = {
    codfac: '',
    codcar: '',
    descripcion: '',
    area: '',
    idgrupobarrida: '',
    cantcuotas: '',
    idsede: ''
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        buttonGroup: {
            margin: theme.spacing(1, 0.5),
            display: "flex"
        }
    }))

const FormCuentas = ({ width = "max-content" }) => {

    const classes = useStyles()
    const {
        values,
        setValues,
        handleChangeForm,
        resetForm,
    } = useForm(initialFValues, true);

    const { formSubmit } = useSubmit(addCuentas, values)
    console.log("VALORES DE FORMULARIO ", values)
    return (
        <Form
            width={width}
            title="Nueva Cuenta"
            ButtonSubmit="Registrar Nueva Persona"
            onSubmit={formSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Divider orientation="horizontal" light={true} />
                </Grid>

                <Grid container item xs={12} spacing={1}>
                    <Grid item xs={6}>
                        <Controls.Input
                            name="codfac"
                            label="Codigo Facultad"
                            value={values.cofac}
                            onChange={handleChangeForm} />
                    </Grid>
                    <Grid item xs={6}>
                        <Controls.Input
                            label="Codigo de Carrera"
                            name="codcar"
                            value={values.codcar}
                            onChange={handleChangeForm}
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12}>
                        <Controls.Input
                            label="Descripcion"
                            name="descripcion"
                            value={values.descripcion}
                            onChange={handleChangeForm}
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12}>
                        <Controls.Input
                            label="Cantidad de Cuotas"
                            name="cantcuotas"
                            value={values.cantcuotas}
                            onChange={handleChangeForm}
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12} >
                        <Controls.Input
                            label="Area"
                            name="area"
                            value={values.area}
                            onChange={handleChangeForm}
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12}>
                        <Controls.AutocompleteSelect
                            promSelectList={getListaGruposBarrida()}
                            name="idgrupobarrida"
                            label="ID Grupo Barrida"
                            filtro={'descripcion'}
                            onChange={handleChangeForm}
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12}>
                        <Controls.AutocompleteSelect
                            promSelectList={getSedesListSelect()}
                            filtro={'descripcion'}
                            name="idsede"
                            label="ID Sede"
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
                            text="Crear Cuenta Nueva" />
                    </Grid>
                </Grid>
            </Grid>
        </Form>

    )
}

export default FormCuentas