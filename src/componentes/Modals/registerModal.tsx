import React, { FC, useState } from 'react';
import ReactDom from 'react-dom';
import Register from '../Forms/Register'
import { makeStyles, createStyles } from '@material-ui/core/styles';

interface Prop {
    active: boolean,
    closeModal: () => void
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
            zIndex: 100,
        },
        openFondo: {
            animation: 'openFondo .5s cubic-bezier(0.22, 1, 0.36, 1) 0s 1 normal none'
        },
        modalContainer:{
            top:'50%',
            left: '50%',
            height: '100%',
            width: 'auto',
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            aligniItems: 'center',
            transform: 'translate(-50%,-50%)',
            zIndex: 800
          },
          modal: {
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               flexDirection: 'column',
               position: 'fixed',
               padding: 20,
               boxShadow: '0px 9px 17px 6px rgba(0,0,0,0.45)',
               borderRadius: 10,
               zIndex:  1000 ,
           },
        slideIn:{
            animation: 'slideIn .5s cubic-bezier(0.22, 1, 0.36, 1) 0s 1 normal none',
          }
    }));

const modalRoot = document.getElementById('modal')


const RegisterModal: FC<Prop> = ({ active, closeModal }) => {

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



    return modalRoot
        ? ReactDom.createPortal(
            <>
                <div
                    onClick={close}
                    className={`${classes.fondo} ${classes.openFondo} ${closeModalBackground ? closeModalBackground : ""}`}
                >
                </div>
                <div className={classes.modalContainer}>
                    <div className={`${classes.modal} ${classes.slideIn} ${closeModalContent ? closeModalContent : ""}`}>
                        <Register/>
                    </div>
                </div>
            </>,
            modalRoot
        )
        : null
}
export default RegisterModal
