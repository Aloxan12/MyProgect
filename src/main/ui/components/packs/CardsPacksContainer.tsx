import React from 'react'
import s from './PacksContainer.module.scss'
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {
    getCardsPacksTC,
    CardsPacksType,
    addNewCardsPackTC,
    removeCardsPackTC,
    updateCardsPackTC
} from "../../../bll/reducers/cardsPacks-reducer";
import {AppRootStateType} from "../../../bll/store";
import {CardsPack} from "./CardsPack";

export const CardsPacksContainer = () => {
    const newCardsPack = {
        name: "no Name",
        path: "/def",
        grade: 0,
        shots: 0,
        rating: 0,
        deckCover: "url or base64",
        private: false,
        type: "pack"
    }

    const cardsPacks = useSelector<AppRootStateType, Array<CardsPacksType>>(state => state.packs.cardsPacks)

    const dispatch = useDispatch()

    const getCardsPacks = () => {
        dispatch(getCardsPacksTC())
    }

    const addNewCardsPack = () => {
        dispatch(addNewCardsPackTC(newCardsPack))
    }
    const removeCardsPack = (packId: string) => {
        dispatch(removeCardsPackTC(packId))
    }
    const updateCardsPack = (packId: string) => {
        dispatch(updateCardsPackTC(packId, "new name"))
    }

    return (
        <div>
            <SuperButton onClick={getCardsPacks}>Get packs</SuperButton>
            <button onClick={addNewCardsPack}>add</button>
            <div  className={s.card}>
            <div  className={s.rowColor}  style={{backgroundColor:"rgb(238, 218, 218)" }}>
                    <div className={s.item}>Name</div>
                    <div className={s.item}>Cards</div>
                    <div className={s.item}>
                        <select className={s.select}>
                            <option>Last Updated</option>
                            <option>One Updated</option>
                        </select>
                    </div>
                    <div className={s.item}>Created by</div>
                </div>
                <CardsPack
                    cardsPacks={cardsPacks}
                    removeCardsPack={removeCardsPack}
                    updateCardsPack={updateCardsPack}
                />
            </div>
        </div>
    )
}