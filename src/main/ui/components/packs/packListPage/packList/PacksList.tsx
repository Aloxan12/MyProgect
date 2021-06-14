import React, {ChangeEvent} from 'react';
import s from './PacksList.module.scss'
import {Filter} from "./filter/Filter";
import {CardsPacksContainer} from "./cardsPacks/CardsPacksContainer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../../bll/store";
import {
    addNewCardsPackTC,
    CardsPacksType,
    getCardsPacksTC, removeCardsPackTC,
    setCurrentPageAC,
    setPageCountAC,
    setUserIdAC, updateCardsPackTC
} from "../../../../../bll/reducers/cardsPacks-reducer";
import {Paginator} from "../../../../common/Paginator/Paginator";
import {LoginInitialStateType} from "../../../../../bll/reducers/login-reducer";

type PacksListPropsType = {
    auth: LoginInitialStateType
}

export const PacksList: React.FC<PacksListPropsType> = ({auth}) => {

    const cardsPacks = useSelector<AppRootStateType, Array<CardsPacksType>>(state => state.packs.cardsPacks)
    const pageSize = useSelector<AppRootStateType, number>(state => state.packs.pageCount)
    const totalPacksCount = useSelector<AppRootStateType, number>(state => state.packs.totalPacksCount)
    const currentPage = useSelector<AppRootStateType, number>(state => state.packs.page)

    const dispatch = useDispatch()

    // Filter
    const getMyPacks = () => {
        if(auth.dataUser?._id){
            dispatch(setUserIdAC(auth.dataUser._id))
            dispatch(getCardsPacksTC())
        }
    }
    const getAllPacks = () => {
        dispatch(setUserIdAC(""))
        dispatch(getCardsPacksTC())
    }

    // CardsPacksContainer
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
    const addNewCardsPack = () => {
        dispatch(addNewCardsPackTC(newCardsPack))
    }
    const removeCardsPack = (packId: string) => {
        dispatch(removeCardsPackTC(packId))
    }
    const updateCardsPack = (packId: string) => {
        dispatch(updateCardsPackTC(packId, "new name"))
    }

    // Paginator
    const onPageChanged = (pageNumber: number) => {
        dispatch(setCurrentPageAC(pageNumber))
        dispatch(getCardsPacksTC())
    }
    const setPageCount = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setPageCountAC(Number(e.currentTarget.value)))
        dispatch(getCardsPacksTC())
    }

    return (
        <div className={s.main}>
            <Filter
                getMyPacks={getMyPacks}
                getAllPacks={getAllPacks}
            />
            <div className={s.content}>
                <h2 className={s.packListTitle}>Packs list</h2>
                <form className={s.wrap}>
                    <input className={s.input} type="text" placeholder="Searh..."/>
                    <button className={s.btn}>Add new pack</button>
                </form>

                <CardsPacksContainer
                    cardsPacks={cardsPacks}
                    auth={auth}
                    addNewCardsPack={addNewCardsPack}
                    removeCardsPack={removeCardsPack}
                    updateCardsPack={updateCardsPack}
                />
                <Paginator
                    pageSize={pageSize}
                    totalItemCounts={totalPacksCount}
                    currentPage={currentPage}
                    onPageChanged={onPageChanged}
                    setPageCount={setPageCount}/>

            </div>
        </div>
    )
}