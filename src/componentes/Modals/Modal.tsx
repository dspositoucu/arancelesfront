import React, { FC, useState, ReactNode } from 'react';
import ReactDom from 'react-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

interface Prop {
    active: boolean,
    closeModal: () => void,
    children: ReactNode,
    width?: string,
    height?: string
}

const modalRoot = document.getElementById('modal')

const Modal: FC<Prop> = ({ active, closeModal, children, width = '80vw', height = 'max-content' }) => {
    const useStyles = makeStyles((theme:Theme) =>
        createStyles({
            fondo: {
                display: "flex",
                justifyContent: "center",
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, .7)',
                zIndex: 1,
            },
            modalContainer: {
                top: '50%',
                left: '50%',
                position: 'fixed',
                display: 'grid',
                placeItems: 'center',
                transform: 'translate(-50%,-50%)',
                zIndex: 2,
            },
            modal: {
                position: 'relative',
                width: width,
                height: height,
                borderRadius: 14,
                padding: theme.spacing(2,3),
                background: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                zIndex: 2,
                [theme.breakpoints.down("md")]:{
                    height:'95vh'
                }
            },
            cerrar: {
                position: 'absolute',
                zIndex: 1000,
                top: '0px',
                right: '0px',
                cursor: 'pointer'

            }
        }));

    const classes = useStyles()

    const [closeModalBackground, setCloseBackground] = useState('')
    const [closeModalContent, setCloseModalContent] = useState('')

    if (!active) {
        return null
    }

    function close() {
        setCloseBackground("CloseModalFondo")
        setCloseModalContent("CloseModal")
        setTimeout(() => {
            setCloseBackground("")
            setCloseModalContent("")
            closeModal()
        }, 300)
    }

    console.log(closeModalBackground, closeModalContent)

    return modalRoot
        ? ReactDom.createPortal(
            <>
                <div
                    className={`${classes.fondo} openFondo ${closeModalBackground ? closeModalBackground : ""}`}
                >
                </div>
                <div className={classes.modalContainer}>
                    <div className={`${classes.modal} slideIn ${closeModalContent ? closeModalContent : ""}`}>
                        <div onClick={close} className={classes.cerrar}>
                            <HighlightOffIcon  fontSize="large" color="secondary" />
                        </div>
                        {children}
                    </div>
                </div>
            </>,
            modalRoot
        )
        : null
}
export default Modal
