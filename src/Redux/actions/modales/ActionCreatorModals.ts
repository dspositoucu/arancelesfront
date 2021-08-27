import { ActionTypes, OpenModalRegister, OpenModalEdit, OpenModal } from "./ActionTypeModal";

export const openModal = (): OpenModal => {
    return {
        type: ActionTypes.MODAL
    }
}

export const openModalRegister = (): OpenModalRegister => {
    return {
        type: ActionTypes.MODAL_FORM_REGISTER,
    }
}

export const openModalEdit = (): OpenModalEdit => {
    return {
        type: ActionTypes.MODAL_FORM_EDIT,
    }
}
