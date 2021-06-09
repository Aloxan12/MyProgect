import {Dispatch} from "redux";
import {cardsAPI} from "../../dal/packs/cardsAPI";
import {setErrorProfilePage} from "./profile-reducer";

export type CardsActionType = ReturnType<typeof cardsAC>
export type CardsInitialStateType = typeof initialState

let initialState = {
    cards: null
}

const cardsReducer = (state = initialState, action: CardsActionType): CardsInitialStateType => {
    switch (action.type) {
        case 'CARDS/CARDS/GET-CARDS':
            return {
                ...state,
                cards: action.cards
            }
        default:
            return state
    }
}

export const cardsAC = (cards: any) => ({type: 'CARDS/CARDS/GET-CARDS', cards} as const)

export const getNewCardsTC = (id: string | undefined) => {
    return (dispatch: Dispatch) => {
        cardsAPI.getCards(id)
            .then(res => {
                debugger
                dispatch(cardsAC(res.data))
            })
            .catch((e) => {
                dispatch(setErrorProfilePage(e.response
                    ? e.response.data.error
                    : (e.message + ', more details in the console')
                ))
            })

    }
}

export default cardsReducer
