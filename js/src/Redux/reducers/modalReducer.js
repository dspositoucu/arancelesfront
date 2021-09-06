import { ActionTypes } from "../actions/modales/ActionCreatorModals";

const InitialState = {
    defaultModal: false,
    modalRegister: false,
    modalEdit: false
}

const modalReducer= (state = InitialState, action) => {

    switch (action.type) {

        case ActionTypes.MODAL_FORM_REGISTER: {
            return {
                ...state,
                modalRegister: !state.modalRegister,
                modalEdit: false
            }
        }

        case ActionTypes.MODAL_FORM_EDIT: {
            return {
                ...state,
                modalEdit: !state.modalEdit,
                modalRegister: !state.modalRegister
            }
        }

        case ActionTypes.MODAL: {
            return {
                ...state,
                defaultModal: !state.defaultModal
            }
        }

        default: return state
    }

}

export default modalReducer