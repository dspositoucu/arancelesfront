import { useSelector } from 'react-redux';
import { useEffect } from 'react'
import { Grid} from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import Icon from '../Icons/Icono'

// Import Componentes
import Controls from '../Forms/Controls'
import FormContainer from '../Forms/FormContainer';
// Custom hooks
import { useForm } from '../../hooks/useForm'
import useSubmit from '../../hooks/useSubmit';

const FromMovimientosCtacte = ({width=''}) => {
    const { configForm } = useSelector((state) => state.CtacteState)
    const initialValue = {
        concepto: '',
        debe: '',
        haber: '',
        fechamov: '',
    }
    const {
        values,
        setValues,
        handleChangeForm,
        resetForm,
    } = useForm({
        ...initialValue,
        codigo: configForm.codigo,
        codfac: configForm.codfac,
        codcar: configForm.codcar
    });


    useEffect(() => {
        setValues({
            ...values,
            codigo: configForm.codigo,
            codfac: configForm.codfac,
            codcar: configForm.codcar
        })
    }, [configForm.id])


    return (
        <FormContainer
            width={width}
            hidenButton
            resetForm={resetForm}
            LabelButtonSubmit=""
            title="Agregar Movimiento"
            ButtonSubmit="Agregar Mov Cta.cte."
            onSubmit={() => { }}>
            <Grid container spacing={2}>
                <Grid container item xs={12} spacing={1}>
                    <Grid item xs={2}>
                        <Controls.Input
                            inputProps={{ style: { fontSize: 12 } }}
                            name="fecmov"
                            type="date"
                            InputLabelProps={{
                                shrink: false,
                                style: { fontSize: 12 }
                            }}
                            value={values.fecmov}
                            onChange={handleChangeForm}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Controls.Input
                            inputProps={{ style: { fontSize: 12 } }}
                            InputLabelProps={{ style: { fontSize: 12 } }}
                            label="Concepto"
                            name="concepto"
                            value={values.concepto}
                            onChange={handleChangeForm}
                        />
                    </Grid>
                    <Grid item xs={2} >
                        <Controls.Input
                            inputProps={{ style: { fontSize: 12 } }}
                            InputLabelProps={{ style: { fontSize: 12 } }}
                            label="Debe"
                            name="debe"
                            value={values.debe}
                            onChange={handleChangeForm}
                        />
                    </Grid>
                    <Grid item xs={2} >
                        <Controls.Input
                            inputProps={{ style: { fontSize: 12 } }}
                            InputLabelProps={{ style: { fontSize: 12 } }}
                            label="Haber"
                            name="haber"
                            value={values.haber}
                            onChange={handleChangeForm}
                        />
                    </Grid>
                    <Grid
                        alignItems='center'
                        justify='center'
                        container xs={1}
                        item>
                        <IconButton
                            style={{ padding: 0 }}
                        >
                            <Icon.Agregar />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </FormContainer >

    )
}

export default FromMovimientosCtacte