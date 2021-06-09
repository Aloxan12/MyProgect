export type AppActionType = ReturnType<typeof setRequestStatusAC>
export type AppInitialStateType = typeof initialState
export type RequestStatusType = "loading" | "success" | "fail"

let initialState = {
    requestStatus: "success" as RequestStatusType
}

const appReducer = (state = initialState, action: AppActionType): AppInitialStateType => {
    switch (action.type) {
        case 'CARDS/REGISTER/SET-REQUEST-STATUS':
            return {
                ...state, requestStatus: action.requestStatus
            }
        default:
            return state
    }
}

export const setRequestStatusAC = (requestStatus: RequestStatusType) => ({type: 'CARDS/REGISTER/SET-REQUEST-STATUS', requestStatus} as const)

export default appReducer
