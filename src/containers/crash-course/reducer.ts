
import { ActionTypes } from "./actionTypes";
import { CrashCourseTypes } from "./constants"
const initalState = 0

const reducer = (state: number = initalState, action: ActionTypes) => {
    switch (action.type) {
        case CrashCourseTypes.DEPOSIT:
            return state + action.payload;
        case CrashCourseTypes.WITHDRAW:
            return state - action.payload;
        case CrashCourseTypes.BANKRUPT:
            return 0;
        default:
            return state;
    }
}

export default reducer;
