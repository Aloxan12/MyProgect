import {Dispatch} from "redux";
import {cardsPacksAPI} from "../../dal/packs/cardsPacksAPI";
import {ThunkDispatch} from "redux-thunk";

export type PacksActionType = ReturnType<typeof getCardsPacksAC>
    | ReturnType<typeof updateCardsPackAC>
export type PacksInitialStateType = typeof initialState

export type CardsPacksType = {
    cardsCount: number
    created: string
    deckCover: null
    grade: number
    more_id: string
    name: string
    path: string
    private: boolean
    rating: number
    shots: number
    type: string
    updated: string
    user_id: string
    user_name: string
    __v: number
    _id: string
}
export type NewCardsPackType = {
    name: string
    path: string
    grade: number
    shots: number
    rating: number
    deckCover: string
    private: boolean
    type: string
}

let initialState = {
    cardsPacks: [] as Array<CardsPacksType>,
    packName: "",
    min: 0,
    max: 9,
    sortPacks: "",
    page: 1,
    pageCount: 6,
    user_id: "",
}

const cardsPacksReducer = (state = initialState, action: PacksActionType): PacksInitialStateType => {
    switch (action.type) {
        case 'CARDS/PACKS/GET-CARDS-PACKS':
            return {...state, cardsPacks: action.cardsPacks}
        case 'CARDS/PACKS/UPDATE-CARDS-PACK':
            return {
                ...state,
                cardsPacks: state.cardsPacks.map(p => p._id === action.cardsPackId ? {...p, user_name: action.newName} : p)
            }
        default:
            return state
    }
}

export const getCardsPacksAC = (cardsPacks: Array<CardsPacksType>) => ({type: 'CARDS/PACKS/GET-CARDS-PACKS', cardsPacks} as const)
export const updateCardsPackAC = (cardsPackId: string, newName: string) => ({type: 'CARDS/PACKS/UPDATE-CARDS-PACK', cardsPackId, newName} as const)

export const getCardsPacksTC = () => (dispatch: Dispatch) => {
    return cardsPacksAPI.getCardsPacks()
        .then(response => {
            dispatch(getCardsPacksAC(response.data.cardPacks))
        })
        .catch(e => {
            console.log(e.response.data.error)
        })
}
export const addNewCardsPackTC = (cardsPack: NewCardsPackType) => (dispatch: ThunkDispatch<PacksInitialStateType, null,PacksActionType>) => {
    return cardsPacksAPI.addNewCardsPack(cardsPack)
        .then(response => {
            dispatch(getCardsPacksTC())
        })
        .catch(e => {
            console.log(e.response.data.error)
        })
}
export const removeCardsPackTC = (cardsPackId: string) => (dispatch: ThunkDispatch<PacksInitialStateType, null,PacksActionType>) => {
    return cardsPacksAPI.removeCardsPack(cardsPackId)
        .then(response => {
            dispatch(getCardsPacksTC())
        })
        .catch(e => {
            console.log(e.response.data.error)
        })
}
export const updateCardsPackTC = (_id: string, name: string) => (dispatch: Dispatch) => {
    return cardsPacksAPI.updatePack({_id, name})
        .then(response => {
            const data = response.data.updatedCardsPack
            dispatch(updateCardsPackAC(data._id, data.name))
        })
        .catch(e => {
            console.log(e.response.data.error)
        })
}

export default cardsPacksReducer
