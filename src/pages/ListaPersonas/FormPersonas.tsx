import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';

// Import Componentes
import Controls from '../../componentes/Forms/Controls'

// Custom hooks
import { useForm, Form } from '../../hooks/useForm'
import useSubmit from '../../hooks/useSubmit';

//Actions
import { addPersona } from '../../Redux/actions/personas/ActionCreator';  

const genderItems = [
    { id: 'male', title: 'Masculino' },
    { id: 'female', title: 'Femenino' },
    //{ id: 'other', title: 'Other' },
]

const initialFValues = {
    codigo: '',
    nombre: '',
    email: '',
    telefono: '',
    domicilio: '',
    sexo: 'male',
    departmentId: '',
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

    const { formSubmit } = useSubmit(addPersona,values)

    return (
        <Form
            title="Nueva Persona"
            onSubmit={formSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="codigo"
                        label="Codigo"
                        value={values.codigo}
                        onChange={handleChangeForm}
                    />
                    <Controls.Input
                        label="Nombre"
                        name="nombre"
                        value={values.nombre}
                        onChange={handleChangeForm}
                    />
                    <Controls.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleChangeForm}
                    />
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
                    <Controls.Input
                        label="Telefono"
                        name="telefono"
                        value={values.telefono}
                        onChange={handleChangeForm}
                    />
                    <Controls.Input
                        label="Domicilio"
                        name="domicilio"
                        value={values.domicilio}
                        onChange={handleChangeForm}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name="gender"
                        label="Sexo"
                        value={values.gender}
                        onChange={handleChangeForm}
                        items={genderItems}
                    />
                    <Controls.Input
                        label="Tipo Documento"
                        name="tdoc"
                        value={values.tdoc}
                        onChange={handleChangeForm}
                    />
                    <Controls.Input
                        label="Nro Doc"
                        name="ndoc"
                        value={values.ndoc}
                        onChange={handleChangeForm}
                    />
                    <Controls.Input
                        label="Cuit"
                        name="cuit"
                        value={values.cuit}
                        onChange={handleChangeForm}
                    />
                    <Controls.Input
                        label="Situacion Tributaria"
                        name="situaciontributaria"
                        value={values.situaciontributaria}
                        onChange={handleChangeForm}
                    />
                    <div>
                        <Controls.Button
                            text="Limpiar Formulario"
                            variant="secondary"
                            onClick={resetForm} />
                            
                        <Controls.Button
                            type="submit"
                            variant="primary"
                            text="Registrar Nueva Persona" />
                    </div>

                </Grid>
            </Grid>
        </Form>
    )
}
export default FormPersonas