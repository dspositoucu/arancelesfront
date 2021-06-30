import ButtonHeader from './ButtonIcon'
import { useDispatch } from 'react-redux'

//actions modals
import { openModalRegister } from '../../Redux/actions/ActionCreatorModals'

//actions persona
import { deletePerson } from '../../Redux/actions/ActionCreator'
import { FC } from 'react'

interface Props {
    type: String
}

const Buttons: FC<Props> = ({ type }) => {
    const dispatch = useDispatch()
    const buttonList = {
        editar: <ButtonHeader
            label="Editar"
            iconType="editar"
        />,
        imprimir: <ButtonHeader
            label="Imprimir"
            iconType="imprimir"
        />,

        nuevo: <ButtonHeader
            label="Nuevo"
            iconType="nuevo"
            onClick={() => { dispatch(openModalRegister()) }}
        />,

        borrar: <ButtonHeader
            label="Borrar"
            iconType="borrar"
            onClick={() => { dispatch(deletePerson()) }}
        />
    }

    return <>{buttonList[type as keyof Object]}</>
}



export default Buttons