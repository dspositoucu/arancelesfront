import React, { useState, useEffect } from 'react'
import { Grid, Divider } from '@material-ui/core';

// Import Componentes
import Controls from '../../componentes/Forms/Controls'

// Custom hooks
import { useForm, Form } from '../../hooks/useForm'
import useSubmit from '../../hooks/useSubmit';

//Actions
import { addPersona } from '../../Redux/actions/personas/ActionCreator';
import { getAllGeneros } from '../../Redux/actions/personas/ActionCreator';


const initialFValues = {
    codigo: '',
    nombre: '',
    email: '',
    telefono: '',
    domicilio: '',
    sexo: '',
    ndoc: '',
    cuit: '',
    tdoc: '',
    situaciontributaria: '',
    fecnac: ''
}

const FormPersonas = () => {
    const {
        values,
        setValues,
        handleChangeForm,
        resetForm,
    } = useForm(initialFValues, true);

    const { formSubmit } = useSubmit(addPersona, values)

    return (
        <Form
            title="Nueva Persona"
            onSubmit={formSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Divider orientation="horizontal" light={true} />
                </Grid>
                <Grid item container xs={12}>
                    <Controls.Input
                        name="codigo"
                        label="Codigo"
                        value={values.codigo}
                        onChange={handleChangeForm}
                    />
                </Grid>
                <Grid xs={12} container item>
                    <Controls.Input
                        label="Nombre"
                        name="nombre"
                        value={values.nombre}
                        onChange={handleChangeForm}
                    />
                </Grid>
                <Grid xs={12} container item>
                    <Controls.Input
                        label="Email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChangeForm}
                    />
                </Grid>
                <Grid xs={12} container item>
                    <Grid item xs={12}>
                        <Controls.Input
                            label="Fecha de Nacimiento"
                            name="fecnac"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={values.fecnac}
                            onChange={handleChangeForm}
                        />
                    </Grid>
                </Grid>
                <Grid xs={12} container item>


                    <Controls.Input
                        label="Telefono"
                        name="telefono"
                        value={values.telefono}
                        onChange={handleChangeForm}
                    />
                </Grid>
                <Grid xs={12} container item>
                    <Controls.Input
                        label="Domicilio"
                        name="domicilio"
                        value={values.domicilio}
                        onChange={handleChangeForm}
                    />
                </Grid>
                <Grid xs={12} container item>
                    <Grid item xs={12}>
                        <Controls.AutocompleteSelect
                            promSelectList={getAllGeneros()}
                            filtro={'descripcion'}
                            valueautocomplete={values.gender}
                            name="gender"
                            label="Genero"
                            value={values.gender}
                            onChange={(event, value) => handleChangeForm({ target: { value: value.id, name: 'gender' } })}
                        />
                    </Grid>
                </Grid>
                <Grid xs={12} container item>

                    <Controls.Input
                        label="Tipo Documento"
                        name="tdoc"
                        value={values.tdoc}
                        onChange={handleChangeForm}
                    />
                </Grid>
                <Grid xs={12} container item>

                    <Controls.Input
                        label="Nro Doc"
                        name="ndoc"
                        value={values.ndoc}
                        onChange={handleChangeForm}
                    />
                </Grid>
                <Grid xs={12} container item>

                    <Controls.Input
                        label="Cuit"
                        name="cuit"
                        value={values.cuit}
                        onChange={handleChangeForm}
                    />
                </Grid>
                <Grid xs={12} container item>

                    <Controls.Input
                        label="Situacion Tributaria"
                        name="situaciontributaria"
                        value={values.situaciontributaria}
                        onChange={handleChangeForm}
                    />
                </Grid>
                <Grid xs={12} container item>

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
                            text="Crear Nueva Persona" />
                    </Grid>
                </Grid>
            </Grid>
        </Form>
    )
}
export default FormPersonas