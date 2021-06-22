import React, { FC, useState, ReactNode } from 'react';
import ReactDom from 'react-dom';
import { makeStyles, createStyles } from '@material-ui/core/styles';

interface Prop {
    active: boolean,
    closeModal: () => void,
    children: ReactNode
}

const useStyles = makeStyles(() =>
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
            zIndex: 10000,
        },
        modalContainer: {
            top: '50%',
            left: '50%',
            height: '100%',
            width: 'auto',
            position: 'fixed',
            display: 'grid',
            placeItems: 'center',
            transform: 'translate(-50%,-50%)',
            zIndex: 80000
        },
        modal: {
            width: 'max-content',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            position: 'fixed',
            zIndex: 10000,
        },
    }));

const modalRoot = document.getElementById('modal')


const RegisterModal: FC<Prop> = ({ active, closeModal, children }) => {

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

    console.log(closeModalBackground,closeModalContent)

    return modalRoot
        ? ReactDom.createPortal(
            <>
                <div
                    onClick={close}
                    className={`${classes.fondo} openFondo ${ closeModalBackground ? closeModalBackground : ""}`}
                >
                </div>
                <div className={classes.modalContainer}>
                    <div className={`${classes.modal} slideIn ${ closeModalContent ? closeModalContent : ""}`}>
                        {children}
                    </div>
                </div>
            </>,
            modalRoot
        )
        : null
}
export default RegisterModal
