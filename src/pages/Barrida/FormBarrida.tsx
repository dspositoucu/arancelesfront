import React, { useState, useEffect } from 'react'
import { Grid, Divider, Typography } from '@material-ui/core';
import MomentUtils from '@date-io/moment';
import FormContainer from '../../componentes/Forms/FormContainer';
import {
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import { Form as FormFormik } from 'formik';


// Import Componentes
import Controls from '../../componentes/Forms/Controls'

// Custom hooks
import { useForm } from '../../hooks/useForm'
import useSubmit from '../../hooks/useSubmit';

//Actions
import { addBarrida } from '../../Redux/actions/barridas/BarridasActionCreator';
import { getListaGruposBarrida } from '../../Redux/actions/barridas/BarridasActionCreator';

const initialFValues = {
  descripcion: '',
  generado: '',
  enviado: '',
  recibido: '',
  nrobarrida: '',
  idgrupobarrida: '',
  fechabarrida: '',
  fecharecibos: '',
  fechaacreditacion: '',
  fechaentrega: ''
}


const FormBarrida = () => {
  const {
    values,
    setValues,
    handleChangeForm,
    resetForm,
  } = useForm(initialFValues);


  console.log("Valor de formulario", values)

  const { formSubmit } = useSubmit(addBarrida, values)

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <FormContainer
        width="45vw"
        LabelButtonSubmit="Generar Barrida"
        resetForm={resetForm}
        title="Generar Barrida"
        onSubmit={formSubmit}>
        <Grid container spacing={2}>
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
              label="Recibido"
              name="recibido"
              value={values.recibido}
              onChange={handleChangeForm}
            />
          </Grid>

          <Grid container item xs={12}>
            <Controls.Input
              label="Barrida"
              name="nrobarrida"
              value={values.nrobarrida}
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
                name="fechaEntrega"
                value={values.fechaentrega}
                onChange={(date, value) => handleChangeForm({ target: { value: new Date(date), name: "fechaentrega" } })}
                title="Entregado"
              />
            </Grid>
          </Grid>
        {console.log("Fecha Barrida ",values.fechabarrida)}
          <Grid container alignItems="center" item xs={12}>
            <Grid item xs={12}>
              <Controls.DateField
                name="fechabarrida"
                value={values.fechabarrida}
                onChange={(date, value) => handleChangeForm({ target: { value: new Date(date), name: "fechabarrida" } })}
                title="Fecha de Barrida"
              />
            </Grid>
          </Grid>

          <Grid container alignItems="center" item xs={12}>
            <Grid item xs={12}>
              <Controls.DateField
                name="fechaacreditacion"
                value={values.fechaacreditacion }
                onChange={(date, value) => handleChangeForm({ target: { value: new Date(date), name: "fechaacreditacion" } })}

                title="Fecha de Acreditacion"
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center" item xs={12}>
            <Grid item xs={12}>
              <Controls.DateField
                name="fecharecibos"
                value={values.fecharecibos }
                onChange={(date, value) => handleChangeForm({ target: { value: new Date(date), name: "fecharecibos" } })}
                title="Fecha de recibo"
              />
            </Grid>
          </Grid>

          <Grid container item xs={12}>
            <Controls.Checkbox
              label="Enviado"
              name="enviado"
              value={values.enviado}
              onChange={handleChangeForm}
            />
          </Grid>
        </Grid>
      </FormContainer>
    </MuiPickersUtilsProvider>
  )
}
export default FormBarrida