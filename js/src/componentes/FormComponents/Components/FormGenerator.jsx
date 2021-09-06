import React, { FC, useRef } from 'react'
import formik, { useField, Form, FormikProps, Formik } from 'formik';
import * as Yup from 'yup';
import Controls from '../Fields/Controls';
import useIsMounted from './useIsMounted';
import { Grid } from '@material-ui/core';
import { getCuentasListSelect } from '../../../Redux/actions/cuentas/CuentasActionCreator';


export const FormGenerator = (props) => {

  const formConfig={
    spacing:2,
  }

  const field = [
    {
      name: 'nombre',
      type: 'text',
      required: true,
      label: "Nombre"
    },
    {
      name: 'apellido',
      type: 'text',
      required: true,
      label: "Apellido"
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: "Email"
    },
  ]

  const SignupSchema = Yup.object().shape({
    nombre: Yup.string()
      .min(2, 'Muy corto, Min. 2 letras!')
      .max(50, 'muy largo, Max 50 letras!'),
    apellido: Yup.string()
      .min(2, 'Muy corto, Min. 2 letras!')
      .max(50, 'muy largo, Max 50 letras!'),
    email: Yup.string().email('Email invalido'),
  });

  const dataFake = {
    email: '',
    nombre: '',
    apellido: '',
    cuentas:''
  }

  return (
    <Formik
      validateOnBlur={true}
      validateOnChange={true}
      validationSchema={SignupSchema}
      initialValues={dataFake}
      onSubmit={(values, actions) => {
        console.log("values", values, "actions", actions)
      }}
    >
      {({ values, handleSubmit, ...formFunctions }) => (
        <Form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e)
        }}>

          <Grid container spacing={2}>
            {
              field.length && field.map((value) => {
                return (
                  <Grid item xs={12}>
                    <Controls.Input {...value} formFunctions={formFunctions} />
                  </Grid>
                )
              })}
          <Grid item xs={12}>

            <Controls.AutocompleteSelect
              getAsyncOptions={getCuentasListSelect}
              filtro='descripcion'
              output="id"
              valueautocomplete={values.cuentas}
              label="Cuentas"
              name="cuentas"
              formFunctions={formFunctions}
            />
          </Grid>
            <Grid item xs={12}>
              <Controls.Button text="Enviar" variant="primary" type="submit" />
            </Grid>
          </Grid>

        </Form>
      )}
    </Formik>
  )
}
