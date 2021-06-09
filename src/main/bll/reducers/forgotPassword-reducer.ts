import {Dispatch} from "redux";
import {forgotAPI} from "../../dal/auth/forgotPasswordApi";
import {setRequestStatusAC} from "./app-reduser";

export type ForgotPasswordActionType = ReturnType<typeof forgotPasswordAC> | ReturnType<typeof setErrorAC>
| ReturnType<typeof enterNewPasswordAC>
export type ForgotPasswordInitialStateType = typeof initialState

let initialState = {
    email: '',
    error: '',
    enterNewPassword: false
}

const forgotPasswordReducer = (state = initialState, action: ForgotPasswordActionType): ForgotPasswordInitialStateType => {
    switch (action.type) {
        case "CARDS/REGISTER/FORGOT_PASSWORD":{
            return {...state, email: action.email}
        }
        case "CARDS/REGISTER/SET_ERROR":{
            return {...state, error: action.error}
        }
        case "CARDS/REGISTER/ENTER_NEW_PASSWORD":{
            return {...state, enterNewPassword: action.enterNewPassword}
        }
        default:
            return state
    }
}

export const forgotPasswordAC = (email: string) => ({type: 'CARDS/REGISTER/FORGOT_PASSWORD', email} as const)
export const setErrorAC = (error: string) => ({type: 'CARDS/REGISTER/SET_ERROR', error} as const)
export const enterNewPasswordAC = (enterNewPassword: boolean) => ({type: 'CARDS/REGISTER/ENTER_NEW_PASSWORD', enterNewPassword} as const)

export const forgotPasswordTC = (email: string, from:string, message: string)  => (dispatch: Dispatch) => {
    dispatch(setRequestStatusAC('loading'))
    return forgotAPI.postForgotPassword(email, from, message)
        .then(response => {
            console.log(response.data)
            dispatch(forgotPasswordAC(response.data.info))
            dispatch(enterNewPasswordAC(true))
            dispatch(setRequestStatusAC('success'))
        }).catch(e => {
            dispatch(setErrorAC(e.response.data.error))
        })
}


export default forgotPasswordReducer
