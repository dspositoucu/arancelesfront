export enum ActionTypes {
    MODAL_FORM_REGISTER = "MODAL_FORM_REGISTER",
  }

  export interface OpenModalRegister {
    type: ActionTypes.MODAL_FORM_REGISTER,
  }

  export type ModalAction = OpenModalRegister