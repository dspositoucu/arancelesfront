import React, { FC } from 'react'
import formik, { useField, Form, FormikProps, Formik } from 'formik';
import * as Yup from 'yup';
import Controls from '../Fields/Controls'
import ErrorListener from './ErrorListener'
import SubmitListener from './SubmitListener'
import useIsMounted from './useIsMounted';

export const FormGenerator = (props) => {


  const field = [
    {
      name: 'firstName',
      type: 'text',
      required: true,
      label:"firstName"
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
      label:"lastName"
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label:"email"
    },
  ]

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!'),
    email: Yup.string().email('Invalid email'),
  });

  const dataFake = {
    email: '',
    firstName: 'red',
    lastName: '',
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
      {({ values, handleSubmit }) => (
        <Form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e)
        }}>
          {
            field.length && field.map((value)=>{
              return (
                <Controls.Input {...value}/>
              )
            })
          }
          <Controls.Button text="Enviar" variant="primary" type="submit"/>
        </Form>
      )}
    </Formik>
  )
}
