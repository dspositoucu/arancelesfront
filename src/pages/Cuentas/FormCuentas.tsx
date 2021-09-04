import { useState } from 'react';
import { Grid, } from '@material-ui/core';
import MomentUtils from '@date-io/moment';
import {
    MuiPickersUtilsProvider
} from '@material-ui/pickers';

// Import Componentes
import Controls from '../../componentes/Forms/Controls'
import { FormGenerator } from '../../componentes/FormComponents/Components/FormGenerator';

// Custom hooks
import { useForm } from '../../hooks/useForm'
import FormContainer from '../../componentes/Forms/FormContainer';
import useSubmit from '../../hooks/useSubmit';

//Actions
import { getCuentasListSelect, getSedesListSelect, getActividadesExtensionSelect, getTiposCuenta } from '../../Redux/actions/cuentas/CuentasActionCreator';
import { getListaGruposBarrida } from '../../Redux/actions/barridas/BarridasActionCreator';
import { addCuentas } from '../../Redux/actions/cuentas/CuentasActionCreator'
import { getAllUsuarios } from '../../Redux/actions/users/userActionCreator';

const initialFValues = {
    codfac: '',
    codcar: '',
    descripcion: '',
    area: '',
    idgrupobarrida: '',
    cantcuotas: '',
    idtipocuenta:'',
    idusuario:[]
}

const FormCuentas = ({ width = "max-content" }) => {
    const {
        values,
        setValues,
        handleChangeForm,
        resetForm,
        formEdit
    } = useForm(initialFValues);

    const [actExtension, setActEextension] = useState(false)


    console.log("VALORES DEL FORMULARIO ", values)

    const { formSubmit } = useSubmit(addCuentas, values)
    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
            {/*            <Grid container>
                <Grid item xs={12}>
                    <FormGenerator />
                </Grid>
            </Grid>  */}
            <FormContainer
                LabelButtonSubmit={formEdit ? "Actualizar Cuenta" : "Crear Cuenta"}
                resetForm={resetForm}
                width="45vw"
                title={formEdit ? values.descripcion : "Nueva Cuenta"}
                onSubmit={formSubmit}>
                <Grid container spacing={3}>
                    <Grid container item xs={12} spacing={1}>
                        <Grid item xs={6}>
                            <Controls.Input
                                name="codfac"
                                label="Codigo Facultad"
                                value={values.codfac}
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
                            <Controls.CheckboxFormik
                                value={actExtension}
                                onClick={() => setActEextension(!actExtension)}
                                isSwitch={true}
                                label="Actividades de Extension"
                            />
                           { !actExtension 
                            ? <Grid item xs={12}>
                                <Controls.Input
                                    label="Descripcion"
                                    name="descripcion"
                                    value={values.descripcion}
                                    onChange={handleChangeForm}
                                />
                            </Grid>

                            : <Grid item xs={12}>
                                <Controls.AutocompleteSelect
                                    promSelectList={getActividadesExtensionSelect()}
                                    valorSalida="nombre"
                                    name="descripcion"
                                    label="Actividades de Extension"
                                    filtro={'nombre'}
                                    valueautocomplete={values.descripcion}
                                    onChange={handleChangeForm}
                                />
                            </Grid>}

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
                                    promSelectList={getTiposCuenta()}
                                    name="idtipocuenta"
                                    label="Tipo de Cuenta"
                                    valorSalida="id"
                                    filtro='descripcion'
                                    valueautocomplete={values.idtipocuenta}
                                    onChange={handleChangeForm}
                                />
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} spacing={1}>
                            <Grid item xs={12}>
                                <Controls.AutocompleteSelect
                                    promSelectList={getListaGruposBarrida()}
                                    name="idgrupobarrida"
                                    label="ID Grupo Barrida"
                                    valorSalida="id"
                                    filtro={'descripcion'}
                                    valueautocomplete={values.idgrupobarrida}
                                    onChange={handleChangeForm}
                                />
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} spacing={1}>
                            <Grid item xs={12}>
                                <Controls.AutocompleteSelect
                                    multiple={true}
                                    promSelectList={getAllUsuarios()}
                                    valueautocomplete={values.idusuario}
                                    filtro={'descripcion'}
                                    name="idusuario"
                                    valorSalida="idUsuario"
                                    label="Vincular Usuario"
                                    onChange={handleChangeForm}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
            </FormContainer>

        </MuiPickersUtilsProvider>
            )
}

            export default FormCuentas