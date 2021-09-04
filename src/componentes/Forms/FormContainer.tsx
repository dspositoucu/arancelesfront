import { makeStyles, createStyles, Theme, Typography, Divider, Grid } from "@material-ui/core";
import Controls from "./Controls";

const FormContainer = ({ width = '100%', children, title, LabelButtonSubmit = "nuevo", resetForm = () => { }, hidenButton = false, ...other }) => {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                width: width,
                background: "#FFF",
                height: '100%',

                '& .MuiFormControl-root': {
                    width: '100%',
                    height: '100%'
                },
            },

        }))

    console.log("mostrar botones", hidenButton)
    const classes = useStyles();
    return (
        <form 
            className={classes.root} 
            autoComplete="off" {...other}>
            <Grid style={{ height: '100%' }} container spacing={2} >
                <Grid item style={{height:"max-content"}} xs={12}>
                    <Typography variant="h4">{title}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item style={{height:"80%"}} xs={12}>
                    {children}
                </Grid>
                <Grid xs={12} item>
                    <Divider/>
                </Grid>
                {
                    hidenButton
                        ? null
                        : <Grid spacing={1} container style={{height:"max-content"}} xs={12} item>
                            <Grid item xs={3}>
                                <Controls.Button
                                    onClick={() => { }}
                                    variant="primary"
                                    text="Cancelar" />
                            </Grid>
                            <Grid item  container justify="flex-end" direction='row' xs={9}>
                                <Controls.Button
                                    text="Limpiar Formulario"
                                    variant="secondary"
                                    onClick={resetForm} />
                                <Controls.Button
                                    type="submit"
                                    variant="primary"
                                    text={LabelButtonSubmit} />
                            </Grid>
                        </Grid>
                }
            </Grid>
        </form>
    )
}

export default FormContainer