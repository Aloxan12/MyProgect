import {Dispatch} from "redux";
import {setRequestStatusAC} from "./app-reduser";
import {setPasswordAPI} from "../../dal/auth/setPasswordAPI";

export type SetPasswordActionType = ReturnType<typeof setErrorMessagedAC> | ReturnType<typeof isSuccessfulAC>
export type SetPasswordInitialStateType = typeof initialState

let initialState = {
    error: "",
    isSuccessful: false
}

const setPasswordReducer = (state = initialState, action: SetPasswordActionType): SetPasswordInitialStateType => {
    switch (action.type) {
        case 'CARDS/NEW-PASSWORD/SET-ERROR-MESSAGE':
            return {
                ...state,
                error: action.error
            }
        case 'CARDS/NEW-PASSWORD/IS-SUCCESSFUL':
            return {
                ...state,
                isSuccessful: action.isSuccessful
            }
        default:
            return state
    }
}

export const setErrorMessagedAC = (error: string) => ({type: 'CARDS/NEW-PASSWORD/SET-ERROR-MESSAGE', error} as const)
export const isSuccessfulAC = (isSuccessful: boolean) => ({type: 'CARDS/NEW-PASSWORD/IS-SUCCESSFUL', isSuccessful} as const)

export const setNewPasswordTC = (newPassword: string , resetPasswordToken: string) => (dispatch: Dispatch) => {
    dispatch(setRequestStatusAC('loading'))
    return setPasswordAPI.setNewPassword(newPassword, resetPasswordToken)
        .then(response => {
            dispatch(isSuccessfulAC(true))
            dispatch(setRequestStatusAC('success'))
        }).catch(e => {
            dispatch(setErrorMessagedAC(e.response.data.error))
            dispatch(setRequestStatusAC('fail'))
        })
}

export default setPasswordReducer
