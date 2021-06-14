import React, {useEffect} from 'react';
import s from './PackList.module.scss'
import logo from '../../../../../assets/img/logo.png'
import {PacksList} from "./packList/PacksList";
import {authTC} from "../../../../bll/reducers/profile-reducer";
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../bll/store";
import {LoginInitialStateType} from "../../../../bll/reducers/login-reducer";

export const PackListPage = () => {

    const auth = useSelector<AppRootStateType, LoginInitialStateType>(state => state.login)

    const dispatch = useDispatch()

    useEffect(() => {
        if (!auth.auth) {
            dispatch(authTC())
        }
    }, [])

    if (!auth.auth) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div className={s.packListWrap}>
            <div className={s.header}>
                <div className={s.headerInner}>
                    <div className={s.logoWrap}>
                        <img className={s.logo} src={logo}/>
                    </div>
                    <div className={s.btnWrap}>
                        <button className={s.btnPackList}>PackList</button>
                        <button className={s.btnProfile}>Profile</button>
                    </div>
                </div>
            </div>
            <div className={s.content}>
                <PacksList auth={auth}/>
            </div>
        </div>
    )
}