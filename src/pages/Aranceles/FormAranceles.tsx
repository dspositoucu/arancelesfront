import React, { useState, useEffect } from 'react'
import { Grid, Typography, Divider  } from '@material-ui/core';
import Controls from '../../componentes/Forms/Controls'
import { useForm, Form } from '../../hooks/useForm'
import { makeStyles, createStyles, Theme, } from "@material-ui/core";

const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]

const initialFValues = {
    idcuenta: 'SIN CUENTA-00',
    cuota: '',
    monto: '0',
    bonificacion: '0',
    recargo: '0',
    biblioteca: '0',
    mes:'',
    anio:'',
    descripcion:''
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonGroup:{
        margin:theme.spacing(1)
    }
  }))

const FormAranceles = ({ selectList }) => {
    const {
        values,
        setValues,
        handleChangeForm,
        resetForm,
    } = useForm(initialFValues, true);

    const classes = useStyles()

    return (
        <Form 
        title="Formulario de Aranceles"
        onSubmit={() => { }}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleChangeForm}
                    />
                    <Controls.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleChangeForm}
                    />
                    <Controls.Input
                        label="Mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleChangeForm}
                    />
                    <Controls.Input
                        label="City"
                        name="city"
                        value={values.city}
                        onChange={handleChangeForm}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleChangeForm}
                        items={genderItems}
                    />
                    <Controls.Select
                        name="idcuenta"
                        label="Cuenta"
                        value={values.idcuenta}
                        onChange={handleChangeForm}
                        options={selectList}
                    />
                </Grid>
            </Grid>
        </Form>
    )
}
export default FormAranceles