import ButtonHeader from './ButtonIcon'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'; 

//actions modals
import { openModalRegister } from '../../Redux/actions/modales/ActionCreatorModals'

const propTypes =  {
    type: PropTypes.string
}

const Buttons = ({ type }) => {
    const dispatch = useDispatch()
    const buttonList = {
        editar: <ButtonHeader
            label="Editar"
            endIcon="editar"
        />,
        imprimir: <ButtonHeader
            label="Imprimir"
            endIcon="imprimir"
        />,

        nuevo: <ButtonHeader
            label="Nuevo"
            endIcon="nuevo"
            onClick={() => { dispatch(openModalRegister()) }}
        />,

    }

    return <>{buttonList[type]}</>
}

Buttons.propTypes = propTypes



export default Buttons