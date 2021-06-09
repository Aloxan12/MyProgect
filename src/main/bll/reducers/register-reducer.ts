import {Dispatch} from "redux";
import {registerAPI} from "../../dal/auth/registerAPI";
import { setRequestStatusAC } from "./app-reduser";

export type RegisterActionType = ReturnType<typeof setEmailAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setRegistrationSuccessAC>
export type RegisterInitialStateType = typeof initialState

let initialState = {
    email: "",
    error: "",
    registrationSuccess: false,
}

const registerReducer = (state = initialState, action: RegisterActionType): RegisterInitialStateType => {
    switch (action.type) {
        case 'CARDS/REGISTER/SET-EMAIL':
            return {
                ...state,
                email: action.email
            }
        case 'CARDS/REGISTER/SET-ERROR':
            return {
                ...state, error: action.error
            }
        case 'CARDS/REGISTER/REGISTRATION-SUCCESS':
            return {
                ...state, registrationSuccess: action.registrationSuccess
            }
        default:
            return state
    }
}

export const setEmailAC = (email: string) => ({type: 'CARDS/REGISTER/SET-EMAIL', email} as const)
export const setErrorAC = (error: string) => ({type: 'CARDS/REGISTER/SET-ERROR', error} as const)
export const setRegistrationSuccessAC = (registrationSuccess: boolean) => ({type: 'CARDS/REGISTER/REGISTRATION-SUCCESS', registrationSuccess} as const)

export const setRegistrationDataTC = (email: string, password: string) => (dispatch: Dispatch) => {
    dispatch(setRequestStatusAC('loading'))
    return registerAPI.setRegisterData(email, password)
        .then(response => {
            dispatch(setEmailAC(response.data.addedUser.email))
            dispatch(setRegistrationSuccessAC(true))
            dispatch(setRequestStatusAC('success'))
        }).catch(e => {
            dispatch(setErrorAC(e.response.data.error))
            dispatch(setRequestStatusAC('success'))
        })
}

export default registerReducer
