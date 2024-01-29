import { LoginTypes } from './constants'
import { ActionTypes } from './actionTypes'

interface LoginState {
    requesting: boolean;
    successful: boolean;
    errors: boolean;
    messages: { body: string; time: Date }[];
}

const initialState: LoginState = {
    requesting: false,
    successful: false,
    errors: false,
    messages: [],
};


const reducer = (state: LoginState = initialState, action: ActionTypes) => {
    switch (action.type) {
        case LoginTypes.LOGIN_REQUESTING:
            return {
                requesting: true,
                successful: false,
                errors: false,
                messages: [{ body: 'Logging in...', time: new Date() }],
            };
        case LoginTypes.LOGIN_SUCCESS:
            return {
                errors: false,
                requesting: false,
                successful: true,
                messages: [{ body: 'Đăng nhập thành công', time: new Date() }],
            };
        case LoginTypes.LOGIN_ERROR:
            return {
                errors: true,
                requesting: false,
                successful: false,
                messages: [{ body: 'Đăng nhập thất bại', time: new Date() }],
            };
        default:
            return state;
    }
}

export default reducer;