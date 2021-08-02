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

    return (
        <Form
            width={width}
            title="Nueva Cuenta"
            ButtonSubmit="Registrar Nueva Persona"
            onSubmit={() => { }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Divider orientation="horizontal" light={true} />
                </Grid>

                <Grid container item xs={12} spacing={1}>
                    <Grid item xs={6}>
                        <Controls.Input
                            name="cofac"
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
                            name="departmentId"
                            label="ID Grupo Barrida"
                            filtro={'descripcion'}
                            value={values.departmentId}
                            onChange={handleChangeForm}
                        />
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12}>
                        <Controls.AutocompleteSelect
                            promSelectList={getSedesListSelect()}
                            filtro={'descripcion'}
                            name="departmentId"
                            label="ID Sede"
                            value={values.departmentId}
                            onChange={handleChangeForm}
                        />
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
                        text="Limpiar Formulario"
                        variant="secondary"
                        onClick={resetForm} />
                    <Controls.Button
                        type="submit"
                        variant="primary"
                        text="Crear Cuenta Nueva" />
                </Grid>
            </Grid>
        </Form>

    )
}

export default FormCuentas