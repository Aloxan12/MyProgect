import {Dispatch} from "redux"
import {logOutAPI} from "../../dal/auth/logOutApi"
import {setErrorProfilePage} from "./profile-reducer";
import {loginAC} from "./login-reducer";

export const auhActionsTypes = {
    LOGOUT: 'CARDS/LOGOUT/LOG-OUT-OF-PROFILE'
} as const;

export type LogOutActionType = ReturnType<typeof logOutOfProfileAC>

export type LogOutInitialStateType = typeof initialState

let initialState = {
    logOutInfo: null as string | null,
    errorMessage: null as string | null
}

const logOutReducer = (state = initialState, action: LogOutActionType): LogOutInitialStateType => {
    switch (action.type) {
        case auhActionsTypes.LOGOUT:
            return {
                ...state,
                logOutInfo: action.data
            }
        default:
            return state
    }
}

export const logOutOfProfileAC = (data: string) => ({type: auhActionsTypes.LOGOUT, data} as const)

export const logOutTC = () => {
    return (dispatch: Dispatch) => {
        logOutAPI.logOutOfProfile()
            .then(res => {
                dispatch(logOutOfProfileAC(res.data.info))
                dispatch(loginAC(null))
            })
            .catch((e) => {
                dispatch(setErrorProfilePage(e.response
                    ? e.response.data.error
                    : (e.message + ', more details in the console')
                ))
            })
    }
}

export default logOutReducer
