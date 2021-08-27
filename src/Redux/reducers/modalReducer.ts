import { Reducer } from "redux";
import { IModalInitialState } from "../state/AppState";
import { ActionTypes, ModalAction } from "../actions/modales/ActionTypeModal";

const InitialState: IModalInitialState = {
    defaultModal: false,
    modalRegister: false,
    modalEdit: false
}

const modalReducer: Reducer<IModalInitialState, ModalAction> = (state = InitialState, action: ModalAction) => {

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