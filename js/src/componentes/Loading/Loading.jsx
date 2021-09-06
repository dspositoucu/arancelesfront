import Lottie from 'react-lottie'
import { createStyles, makeStyles } from "@material-ui/core/styles";

const loading = require('../../assets/loading.json')

const useStyles = makeStyles((theme) =>
    createStyles({
        loadingAnimationArea:{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', 
        },
        loadingAnimationIcon:{ 
            height: '60px',
            width: '60px'
          }
    })
)

const Loading = () => {
    const classes = useStyles()
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData:loading,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        }
    }
    return (
        <div className={classes.loadingAnimationArea}>
            <div className={classes.loadingAnimationIcon}>
                <Lottie options={defaultOptions} />
            </div>
        </div>
    )
}

export default Loading