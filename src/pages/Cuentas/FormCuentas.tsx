import React, { useState, useEffect } from 'react'
import { makeStyles, createStyles, Theme, Divider } from "@material-ui/core";
import { Grid, } from '@material-ui/core';

// Import Componentes
import Controls from '../../componentes/Forms/Controls'

// Custom hooks
import { useForm, Form } from '../../hooks/useForm'
import useSubmit from '../../hooks/useSubmit';

//Actions
import { addPersona } from '../../Redux/actions/personas/ActionCreator';

//hooks
import useSelect from '../../hooks/useSelect';


const initialFValues = {
    codfac: '',
    codcar: '',
    descripcion: '',
    area: '',
    idcarrera: '',
    sexo: 'male',
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

const FormCuentas = () => {
    const classes = useStyles()
    const {
        values,
        setValues,
        handleChangeForm,
        resetForm,
    } = useForm(initialFValues, true);

    const { formSubmit } = useSubmit(addPersona, values)

    return (
        <Form
            title="Nueva Cuenta"
            ButtonSubmit="Registrar Nueva Persona"
            onSubmit={formSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="cofac"
                        label="Codigo Facultad"
                        value={values.cofac}
                        onChange={handleChangeForm}
                    />
                    <Controls.Input
                        label="Codigo de Carrera"
                        name="codcar"
                        value={values.codcar}
                        onChange={handleChangeForm}
                    />
                    <Controls.Input
                        label="Descripcion"
                        name="descripcion"
                        value={values.descripcion}
                        onChange={handleChangeForm}
                    />
                    <Controls.Input
                        label="Area"
                        name="area"
                        value={values.area}
                        onChange={handleChangeForm}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.Input
                        label="ID Carrera"
                        name="idcarrera"
                        value={values.idcarrera}
                        onChange={handleChangeForm}
                    />
                    <Controls.Select
                        name="departmentId"
                        label="ID Grupo Barrida"
                        value={values.departmentId}
                        fistValue={'SIN CUENTA-00'}
                        onChange={handleChangeForm}
                        options={["Sin Barrida", "Sede Central", "Santa Fe", "Sede Rosario"]}
                    />
                    <Controls.Input
                        label="Cantidad de Cuotas"
                        name="cantcuotas"
                        value={values.cantcuotas}
                        onChange={handleChangeForm}
                    />
                    <Controls.Select
                        name="departmentId"
                        label="ID Sede"
                        value={values.departmentId}
                        onChange={handleChangeForm}
                        options={["Sede Central", "Santa Fe", "Sede Rosario"]}
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
                            text="Nueva Cuenta" />
                    </Grid>
                </Grid>
            </Grid>
        </Form>
    )
}
export default FormCuentas