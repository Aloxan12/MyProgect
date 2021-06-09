import {Dispatch} from "redux";
import {profileAPI, ProfileDataType} from "../../dal/profile/profileApi";

export type ProfileActionType = ReturnType<typeof getProfileDataAC>
    | ReturnType<typeof setErrorProfilePage>

export type ProfileInitialStateType = typeof initialState

let initialState = {
    profileData: null as ProfileDataType | null,
    errorMessage: ''
}

const profileReducer = (state = initialState, action: ProfileActionType): ProfileInitialStateType => {
    switch (action.type) {
        case 'CARDS/PROFILE/GET-PROFILE-DATA':
            return {
                ...state,
                profileData: action.data
            }
        case "CARDS/PROFILE/SET-ERROR-MESSAGE":
            return {
                ...state,
                errorMessage: action.error
            }
        default:
            return state
    }
}

export const getProfileDataAC = (data: any) => ({type: 'CARDS/PROFILE/GET-PROFILE-DATA', data} as const)
export const setErrorProfilePage = (error: string) => ({type: 'CARDS/PROFILE/SET-ERROR-MESSAGE', error} as const)

export const checkDataUserTC = () => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfileData()
            .then(res => {
                dispatch(getProfileDataAC(res.data))

            })
            .catch((e) => {
                dispatch(setErrorProfilePage(e.response
                    ? e.response.data.error
                    : (e.message + ', more details in the console')
                ))
            })
    }
}

export default profileReducer
