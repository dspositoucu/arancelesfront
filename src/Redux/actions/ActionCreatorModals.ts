import { ActionTypes, OpenModalRegister } from "./ActionTypeModal";

export const openModalRegister = () :OpenModalRegister => {
    return {
        type: ActionTypes.MODAL_FORM_REGISTER,
    }
}
