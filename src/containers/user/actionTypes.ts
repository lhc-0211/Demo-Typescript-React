
import { LoginTypes } from "./constants"

interface LoginSuccessActions {
    type: LoginTypes.LOGIN_SUCCESS,
}

interface LoginErrActions {
    type: LoginTypes.LOGIN_ERROR,
}

interface LoginResActions {
    type: LoginTypes.LOGIN_REQUESTING,
}

export type ActionTypes = LoginSuccessActions | LoginErrActions | LoginResActions