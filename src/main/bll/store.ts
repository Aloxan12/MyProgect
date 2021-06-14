import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkAction} from "redux-thunk";
import loginReducer, {LoginActionType} from "./reducers/login-reducer";
import registerReducer, {RegisterActionType} from "./reducers/register-reducer";
import profileReducer, {ProfileActionType} from "./reducers/profile-reducer";
import forgotPasswordReducer, {ForgotPasswordActionType} from "./reducers/forgotPassword-reducer";
import setPasswordReducer, {SetPasswordActionType} from "./reducers/setPassword-reducer";
import appReducer, {AppActionType} from "./reducers/app-reduser";
import cardsPacksReducer, {PacksActionType} from "./reducers/cardsPacks-reducer";
import cardsReducer, {CardsActionType} from "./reducers/cards-reducer";
import logOutReducer from "./reducers/logOut-reducer";


export let rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
    setPassword: setPasswordReducer,
    app: appReducer,
    packs: cardsPacksReducer,
    cards: cardsReducer,
    logOut: logOutReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof store.getState>

export type AppActionsType = LoginActionType
    | RegisterActionType
    | ProfileActionType
    | ForgotPasswordActionType
    | SetPasswordActionType
    | AppActionType
    | PacksActionType
    | CardsActionType

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>

//@ts-ignore
window.store = store

export default store