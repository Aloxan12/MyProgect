import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../bll/store";
import {LoginInitialStateType, newUserDataTC, setErrorPageAC} from '../../../../bll/reducers/login-reducer';
import {Redirect} from "react-router-dom";
import {Login} from "./Login";
import {RequestStatusType} from "../../../../bll/reducers/app-reduser";

export const LoginContainer = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [rememberMe, setRememberMe] = useState<boolean>(false)
    const dispatch = useDispatch()

    const dataLogin = useSelector<AppRootStateType, LoginInitialStateType>(state => state.login)
    const loading = useSelector<AppRootStateType, RequestStatusType>(state => state.app.requestStatus)

    useEffect(() => {
        dispatch(setErrorPageAC(''))
    }, [email, password])

    if (dataLogin.dataUser !== null) {
        return <Redirect to={'/profile'}/>
    }

    const addUserData = () => {
        dispatch(newUserDataTC(email, password, rememberMe))
    }
    const addNewEmail = (newEmail: string) => {
        setEmail(newEmail)
    }
    const addNewPassword = (newPassword: string) => {
        setPassword(newPassword)
    }
    const changeRememberMe = (newValue: boolean) => {
        setRememberMe(newValue)
    }

    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        addNewEmail(e.currentTarget.value)
    }
    const onChangePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        addNewPassword(e.currentTarget.value)
    }
    const onChangeRememberMeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeRememberMe(e.currentTarget.checked)
    }

    return (
        <Login
            title="Sign in"
            onChangeEmailHandler={onChangeEmailHandler}
            onChangePasswordHandler={onChangePasswordHandler}
            addUserData={addUserData}
            onChangeRememberMeHandler={onChangeRememberMeHandler}
            dataLogin={dataLogin}
            preloader={loading}
        />
    )
}