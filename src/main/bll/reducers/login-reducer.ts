import {Dispatch} from "redux";
import {loginAPI, LoginType} from "../../dal/auth/loginApi";
import {setRequestStatusAC} from "./app-reduser";

export type LoginActionType = ReturnType<typeof setUserData>
    | ReturnType<typeof setErrorPageAC>
    | ReturnType<typeof disableButtonAC>
    | ReturnType<typeof setNewValueAuth>

export const loginActionsTypes = {
    LOGIN: 'CARDS/LOGIN/POST-LOGIN-DATA',
    'NEW-VALUE-AUTH': 'CARDS/LOGIN/NEW-VALUE-AUTH',
    ERROR: 'CARDS/LOGIN/SET-ERROR-MESSAGE',
    DISABLE: 'CARDS/LOGIN/LOGIN-BUTTON',

} as const;


export type LoginInitialStateType = typeof initialState

let initialState = {
    dataUser: null as LoginType | null,
    errorMessage: null as string | null,
    loginButtonDisable: false,
    auth: false
}

const loginReducer = (state = initialState, action: LoginActionType): LoginInitialStateType => {
    switch (action.type) {
        case loginActionsTypes.LOGIN:
            return {
                ...state,
                dataUser: action.dataUser,
            }
        case loginActionsTypes["NEW-VALUE-AUTH"]:
            return {
                ...state,
                auth: action.value
            }
        case loginActionsTypes.ERROR:
            return {
                ...state,
                errorMessage: action.error
            }
        case loginActionsTypes.DISABLE:
            return {
                ...state,
                loginButtonDisable: action.disable
            }
        default:
            return state
    }
}

//AC
export const setUserData = (dataUser: LoginType | null) => ({type: loginActionsTypes.LOGIN, dataUser} as const)
export const setNewValueAuth = (value: boolean) => ({type: loginActionsTypes["NEW-VALUE-AUTH"], value} as const)
export const setErrorPageAC = (error: string) => ({type: loginActionsTypes.ERROR, error} as const)
export const disableButtonAC = (disable: boolean) => ({type: loginActionsTypes.DISABLE, disable} as const)

//TC
export const newUserDataTC = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: Dispatch) => {
        dispatch(setRequestStatusAC('loading'))
        dispatch(disableButtonAC(true))
        loginAPI.postLogin(email, password, rememberMe)
            .then((res) => {
                dispatch(setUserData(res.data))
                dispatch(disableButtonAC(false))
                dispatch(setNewValueAuth(true))
            })
            .catch((e) => {
                dispatch(setErrorPageAC(e.response
                    ? e.response.data.error
                    : (e.message + ', more details in the console')
                ))
                dispatch(disableButtonAC(false))
            })
            .finally(() => {
                    dispatch(setRequestStatusAC('success'))
                }
            )

    }
}

export default loginReducer
