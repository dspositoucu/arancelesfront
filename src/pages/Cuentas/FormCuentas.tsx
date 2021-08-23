import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { makeStyles, createStyles, Theme, Divider } from "@material-ui/core";
import { Grid, } from '@material-ui/core';

import MomentUtils from '@date-io/moment';
import {
    MuiPickersUtilsProvider
} from '@material-ui/pickers';
import { Form as FormFormik } from 'formik';
import DateField from '../../componentes/Forms/DateField';
// Import Componentes
import Controls from '../../componentes/Forms/Controls'

// Custom hooks
import { useForm } from '../../hooks/useForm'
import FormContainer from '../../componentes/Forms/FormContainer';
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

const FormCuentas = ({ width = "max-content" }) => {
    const {
        values,
        setValues,
        handleChangeForm,
        resetForm,
    } = useForm(initialFValues);

    const { formSubmit } = useSubmit(addCuentas, values)


    console.log("VALOR DE FORMULARIO ", values)
    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <FormContainer
                LabelButtonSubmit="Crear Nueva Cuenta"
                resetForm={resetForm}
                width="45vw"
                title="Nueva Cuenta"
                onSubmit={formSubmit}>
                <Grid container spacing={2}>
                    <Grid container item xs={12} spacing={1}>
                        <Grid item xs={6}>
                            <Controls.Input
                                name="codfac"
                                label="Codigo Facultad"
                                value={values.codfac}
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
                                valueautocomplete={values.idgrupobarrida}
                                onChange={(event, value = { id: 0 }) => {

                                    handleChangeForm({ target: { value: !value ? 0 : value.id, name: 'idgrupobarrida' } })
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                        <Grid item xs={12}>
                            <Controls.AutocompleteSelect
                                promSelectList={getSedesListSelect()}
                                valueautocomplete={values.idsede}
                                filtro={'descripcion'}
                                name="idsede"
                                label="ID Sede"
                                onChange={(event, value) => handleChangeForm({ target: { value: !value ? 0 : value.id, name: 'idsede' } })}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </FormContainer>
        </MuiPickersUtilsProvider>
    )
}

export default FormCuentas