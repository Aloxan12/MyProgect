import React, {useEffect} from 'react'
import {LoginInitialStateType} from "../../../../bll/reducers/login-reducer";
import {useDispatch, useSelector} from "react-redux";
import {getNewCardsTC} from "../../../../bll/reducers/cards-reducer";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "../../../../bll/store";
import {Cards} from "./Cards";

export const CardsContainer = () => {

    const auth = useSelector<AppRootStateType, LoginInitialStateType>(state => state.login)
    const id = useSelector<AppRootStateType, string | undefined>(state => state.profile.profileData?._id)
    const cards = useSelector<AppRootStateType, any>(state => state.cards.cards)
    const dispatch = useDispatch()

    console.log(cards)

    useEffect(() => {
        dispatch(getNewCardsTC(id))
    }, [])

    if (auth.dataUser === null) {
        return <Redirect to={'/login'}/>
    }
    return (
        <div>
            {cards}
            {/*<Cards/>*/}
        </div>
    )
}