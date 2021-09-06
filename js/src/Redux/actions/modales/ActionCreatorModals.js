
const ActionTypes = {
    MODAL_FORM_REGISTER: "MODAL_FORM_REGISTER",
    MODAL_FORM_EDIT: "MODAL_FORM_EDIT",
    MODAL: "MODAL"
}

export const openModal = () => {
    return {
        type: ActionTypes.MODAL
    }
}

export const openModalRegister = () => {
    return {
        type: ActionTypes.MODAL_FORM_REGISTER,
    }
}

export const openModalEdit = () => {
    return {
        type: ActionTypes.MODAL_FORM_EDIT,
    }
}

export { ActionTypes }
