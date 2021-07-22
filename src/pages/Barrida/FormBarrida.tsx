import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';

// Import Componentes
import Controls from '../../componentes/Forms/Controls'

// Custom hooks
import { useForm, Form } from '../../hooks/useForm'
import useSubmit from '../../hooks/useSubmit';

//Actions
import { addPersona } from '../../Redux/actions/personas/ActionCreator';

const initialFValues = {
  descripcion: '',
  generado: '',
  enviado: '',
  recibido: '',
  barrida: '',
  idgrupobarrida:'',
  fbarrida:'',
  recibos:'',
  acreditacion:'',
  entregado:''
}

const FormBarrida = () => {
  const {
    values,
    setValues,
    handleChangeForm,
    resetForm,
  } = useForm(initialFValues, true);

  const { formSubmit } = useSubmit(addPersona, values)

  return (
    <Form
      title="Generar Barrida"
      onSubmit={formSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="descripcion"
            label="Descripcion"
            value={values.descripcion}
            onChange={handleChangeForm}
          />
          <Controls.Input
            label="Generado"
            name="generado"
            value={values.generado}
            onChange={handleChangeForm}
          />
          <Controls.Input
            label="Enviado"
            name="enviado"
            value={values.enviado}
            onChange={handleChangeForm}
          />
          <Controls.Input
            label="Recibido"
            name="recibido"
            value={values.recibido}
            onChange={handleChangeForm}
          />
          <Controls.Input
            label="Barrida"
            name="barrida"
            value={values.barrida}
            onChange={handleChangeForm}
          />
          <Controls.Input
            label="ID Grupo Barrida"
            name="idgrupobarrida"
            value={values.barrida}
            onChange={handleChangeForm}
          />

        </Grid>
        <Grid item xs={6}>
          <Controls.Input
            label="Entregado"
            name="entregado"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={values.fecnac}
            onChange={handleChangeForm}
          />
          <Controls.Input
            label="Fecha Barrida"
            name="fbarrida"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={values.fecnac}
            onChange={handleChangeForm}
          />
          <Controls.Input
            label="Acreditacion"
            name="acreditacion"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={values.fecnac}
            onChange={handleChangeForm}
          />
          <Controls.Input
            label="Recibos"
            name="fecnac"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={values.fecnac}
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
              text="Generar Nueva Barrida" />
          </div>

        </Grid>
      </Grid>
    </Form>
  )
}
export default FormBarrida