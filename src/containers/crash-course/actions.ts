import { Dispatch } from "redux"
import { CrashCourseTypes } from "./constants"
import { ActionTypes } from "./actionTypes"

export const depositMoney = (amount: number) => {
    return {
        type: CrashCourseTypes.DEPOSIT,
        payload: amount
    }
}

export const withdrawMoney = (amount: number) => {
    return {
        type: CrashCourseTypes.WITHDRAW,
        payload: amount
    }
}

export const bankruptMoney = (amount: number) => {
    return {
        type: CrashCourseTypes.BANKRUPT,
        payload: amount
    }
}