import { ActionTypes, OpenModalRegister, OpenModalEdit } from "./ActionTypeModal";

export const openModalRegister = () :OpenModalRegister => {
    return {
        type: ActionTypes.MODAL_FORM_REGISTER,
    }
}

export const openModalEdit = () :OpenModalEdit => {
    return {
        type: ActionTypes.MODAL_FORM_EDIT,
    }
}
