import {Dispatch} from "redux";
import {loginAPI, LoginType} from "../../dal/auth/loginApi";
import {setRequestStatusAC} from "./app-reduser";

export type LoginActionType = ReturnType<typeof loginAC>
    | ReturnType<typeof setErrorPageAC>
    | ReturnType<typeof loginizationStatusAC>

export type LoginInitialStateType = typeof initialState

let initialState = {
    dataUser: null as LoginType | null,
    errorMessage: '',
    loginButtonDisable: false
}

const loginReducer = (state = initialState, action: LoginActionType): LoginInitialStateType => {
    switch (action.type) {
        case 'CARDS/LOGIN/POST-LOGIN-DATA':
            return {
                ...state,
                dataUser: action.dataUser
            }
        case "CARDS/LOGIN/SET-ERROR-MESSAGE":
            return {
                ...state,
                errorMessage: action.error
            }
        case "CARDS/LOGIN/LOGIN-BUTTON":
            return {
                ...state,
                loginButtonDisable: action.disable
            }
        default:
            return state
    }
}

export const loginAC = (dataUser: LoginType | null) => ({
    type: 'CARDS/LOGIN/POST-LOGIN-DATA',
    dataUser
} as const)

export const setErrorPageAC = (error: string) => ({
    type: 'CARDS/LOGIN/SET-ERROR-MESSAGE',
    error
} as const)

export const loginizationStatusAC = (disable: boolean) => ({
    type: 'CARDS/LOGIN/LOGIN-BUTTON',
    disable
} as const)

export const newUserDataTC = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch) => {
        dispatch(setRequestStatusAC('loading'))
        dispatch(loginizationStatusAC(true))
        loginAPI.postLogin(email, password, rememberMe)
            .then((res) => {
                dispatch(loginAC(res.data))
                dispatch(loginizationStatusAC(false))
            })
            .catch((e) => {
                dispatch(setErrorPageAC(e.response
                    ? e.response.data.error
                    : (e.message + ', more details in the console')
                ))
                dispatch(loginizationStatusAC(false))
            }).finally(() => {
                dispatch(setRequestStatusAC('success'))
            }
        )

    }
}

export default loginReducer
