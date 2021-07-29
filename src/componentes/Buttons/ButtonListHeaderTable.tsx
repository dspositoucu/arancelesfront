import ButtonHeader from './ButtonIcon'
import { useDispatch } from 'react-redux'

//actions modals
import { openModalRegister } from '../../Redux/actions/modales/ActionCreatorModals'

//actions persona
import { deletePerson } from '../../Redux/actions/personas/ActionCreator'
import { FC } from 'react'

interface Props {
    type: String
}

const Buttons: FC<Props> = ({ type }) => {
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

        borrar: <ButtonHeader
            label="Borrar"
            endIcon="borrar"
            onClick={() => { dispatch(deletePerson()) }}
        />
    }

    return <>{buttonList[type as keyof Object]}</>
}



export default Buttons