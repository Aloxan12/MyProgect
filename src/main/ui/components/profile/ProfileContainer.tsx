import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../bll/store";
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import s from "../auth/login/_Login.module.scss";
import {logOutTC} from "../../../bll/reducers/logOut-reducer";
import {checkDataUserTC} from "../../../bll/reducers/profile-reducer";
import {ProfileInitialStateType} from "../../../bll/reducers/profile-reducer";
import {Redirect} from "react-router-dom";
import {LoginInitialStateType} from "../../../bll/reducers/login-reducer";

export const ProfileContainer = () => {
    const dispatch = useDispatch()
    const auth = useSelector<AppRootStateType, LoginInitialStateType>(state => state.login)
    const profileData = useSelector<AppRootStateType, ProfileInitialStateType>(state => state.profile)

    useEffect(() => {
        dispatch(checkDataUserTC())
    }, [])

    // if () {
    //
    // }
    // if (auth.dataUser === null) {
    //     return <Redirect to={'/login'}/>
    // }

    const logOut = () => {
        dispatch(logOutTC())
    }

    return (
        <div>
            <p>name:{profileData.profileData?.name}</p>
            <p>token:{profileData.profileData?.token}</p>
            <p>cards:{profileData.profileData?.publicCardPacksCount}</p>
            <p>email:{profileData.profileData?.email}</p>
            <SuperButton className={s.loginBtn}
                         onClick={logOut}>Log out
            </SuperButton>
        </div>

        // <Profile/>
    )
}