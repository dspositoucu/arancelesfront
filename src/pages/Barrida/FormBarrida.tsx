import React, { useState, useEffect } from 'react'
import { Grid, Divider, Typography } from '@material-ui/core';
import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import { Form as FormFormik } from 'formik';


// Import Componentes
import Controls from '../../componentes/Forms/Controls'

// Custom hooks
import { useForm, Form } from '../../hooks/useForm'
import useSubmit from '../../hooks/useSubmit';

//Actions
import { addPersona } from '../../Redux/actions/personas/ActionCreator';
import { getListaGruposBarrida } from '../../Redux/actions/barridas/BarridasActionCreator';

const initialFValues = {
  descripcion: '',
  generado: '',
  enviado: '',
  recibido: '',
  barrida: '',
  idgrupobarrida: '',
  fbarrida: '',
  recibos: '',
  acreditacion: '',
  entregado: ''
}

const FormBarrida = () => {
  const {
    values,
    setValues,
    handleChangeForm,
    resetForm,
  } = useForm(initialFValues);


  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Form
        title="Generar Barrida"
        onSubmit={() => { }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Divider orientation="horizontal" light={true} />
          </Grid>
          <Grid container item xs={12}>
            <Controls.Input
              name="descripcion"
              label="Descripcion"
              value={values.descripcion}
              onChange={handleChangeForm}
            />
          </Grid>

          <Grid container item xs={12}>
            <Controls.Input
              label="Generado"
              name="generado"
              value={values.generado}
              onChange={handleChangeForm}
            />
          </Grid>

          <Grid container item xs={12}>
            <Controls.Input
              label="Enviado"
              name="enviado"
              value={values.enviado}
              onChange={handleChangeForm}
            />
          </Grid>

          <Grid container item xs={12}>
            <Controls.Input
              label="Recibido"
              name="recibido"
              value={values.recibido}
              onChange={handleChangeForm}
            />
          </Grid>

          <Grid container item xs={12}>
            <Controls.Input
              label="Barrida"
              name="barrida"
              value={values.barrida}
              onChange={handleChangeForm}
            />
          </Grid>

          <Grid container item xs={12}>
            <Grid item xs={12}>
              <Controls.AutocompleteSelect
                label="Grupo Barrida"
                name="idgrupobarrida"
                filtro="descripcion"
                valueautocomplete={values.idgrupobarrida}
                promSelectList={getListaGruposBarrida()}
                onChange={(event, value) => handleChangeForm({ target: { value: !value ? 0 : value.id, name: 'idgrupobarrida' } })}

              />
            </Grid>
          </Grid>

          <Grid container alignItems="center" item xs={12}>
            <Grid item xs={12}>
            <Controls.DateField
                name="entregado"
                value={values.entregado}
                onChange={handleChangeForm}
                title="Entregado"
              />
            </Grid>
          </Grid>

          <Grid container alignItems="center" item xs={12}>
            <Grid item xs={12}>
            <Controls.DateField
                name="fbarrida"
                value={values.fbarrida}
                onChange={handleChangeForm}
                title="Fecha de Barrida"
              />
            </Grid>
          </Grid>

          <Grid container alignItems="center" item xs={12}>
            <Grid item xs={12}>
              <Controls.DateField
                name="acreditacion"
                value={values.acreditacion}
                onChange={handleChangeForm}
                title="Fecha de Acreditacion"
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center" item xs={12}>
            <Grid item xs={12}>
            <Controls.DateField
                name="recibos"
                value={values.recibos}
                onChange={handleChangeForm}
                title="Fecha de recibo"
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
                text="Generar Barrida" />
            </Grid>
          </Grid>
        </Grid>
      </Form>
    </MuiPickersUtilsProvider>
  )
}
export default FormBarrida