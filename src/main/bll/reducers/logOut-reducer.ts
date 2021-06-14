import {Dispatch} from "redux"
import {logOutAPI} from "../../dal/auth/logOutApi"
import {setErrorProfilePage} from "./profile-reducer";
import {setNewValueAuth, setUserData} from "./login-reducer";
import {setRequestStatusAC} from "./app-reduser";

export const logoutActionsTypes = {
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
        case logoutActionsTypes.LOGOUT:
            return {
                ...state,
                logOutInfo: action.data
            }
        default:
            return state
    }
}

export const logOutOfProfileAC = (data: string) => ({type: logoutActionsTypes.LOGOUT, data} as const)

export const logOutTC = () => {
    return (dispatch: Dispatch) => {
        dispatch(setRequestStatusAC('loading'))
        logOutAPI.logOutOfProfile()
            .then(res => {
                dispatch(logOutOfProfileAC(res.data.info))
                dispatch(setUserData(null))
                dispatch(setNewValueAuth(false))
            })
            .catch((e) => {
                dispatch(setErrorProfilePage(e.response
                    ? e.response.data.error
                    : (e.message + ', more details in the console')
                ))
            })
            .finally(() => {
                    dispatch(setRequestStatusAC('success'))
                }
            )
    }
}

export default logOutReducer
