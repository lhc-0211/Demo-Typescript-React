import { combineReducers } from "redux";
import bankReducer from "../containers/crash-course/reducer"
import loginReducer from "../containers/user/reducer"

const reducers = combineReducers({
    bank: bankReducer,
    login: loginReducer,
});

export default reducers;
export type State = ReturnType<typeof reducers>
