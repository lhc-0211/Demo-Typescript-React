// actions.ts
import { LoginTypes } from './constants';
import { loginUser } from './authService';
import { ActionTypes } from "./actionTypes"
import { Dispatch } from "redux"

export const loginRequest = (username: string, password: string) => {
    return async (dispatch: Dispatch<ActionTypes>) => {
        dispatch({ type: LoginTypes.LOGIN_REQUESTING });
        try {
            const response = await loginUser(username, password);

            if (response.success) {
                dispatch({ type: LoginTypes.LOGIN_SUCCESS });
            } else {
                dispatch({ type: LoginTypes.LOGIN_ERROR });
            }
        } catch (error) {
            dispatch({ type: LoginTypes.LOGIN_ERROR });
        }
    };
};
