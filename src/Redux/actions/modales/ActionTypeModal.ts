export enum ActionTypes {
    MODAL_FORM_REGISTER = "MODAL_FORM_REGISTER",
    MODAL_FORM_EDIT = "MODAL_FORM_EDIT",
  }
  export interface OpenModalRegister {
    type: ActionTypes.MODAL_FORM_REGISTER,
  }
  export interface OpenModalEdit {
    type: ActionTypes.MODAL_FORM_EDIT,
  }

  export type ModalAction = 
    OpenModalRegister 
    | OpenModalEdit