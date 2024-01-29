
import { CrashCourseTypes } from "./constants"

interface DepositAction {
    type: CrashCourseTypes.DEPOSIT,
    payload: number
}

interface WithdrawAction {
    type: CrashCourseTypes.WITHDRAW,
    payload: number
}

interface BankruptAction {
    type: CrashCourseTypes.BANKRUPT,
    payload: number
}

export type ActionTypes = DepositAction | WithdrawAction | BankruptAction