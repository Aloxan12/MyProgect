import React, {ChangeEvent} from 'react';
import s from './_Login.module.scss';
import logo from './../../../../../assets/img/logo.png';
import SuperInputText from "../../../common/c1-SuperInputText/SuperInputText";
import {NavLink} from "react-router-dom";
import SuperCheckbox from "../../../common/c3-SuperCheckbox/SuperCheckbox";
import {LoginInitialStateType} from "../../../../bll/reducers/login-reducer";
import {RequestStatusType} from "../../../../bll/reducers/app-reduser";
import SuperButton from "../../../common/c2-SuperButton/SuperButton";
import {LoadingSvg} from '../../../common/loading/LoadingSvg';

type PropsType = {
    title: string
    onChangeEmailHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onChangePasswordHandler: (e: ChangeEvent<HTMLInputElement>) => void
    addUserData: () => void
    onChangeRememberMeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    dataLogin: LoginInitialStateType
    preloader: RequestStatusType
}

export const Login: React.FC<PropsType> = (props) => {

    return (

        <div className={s.login}>

            <div className={s.card}>

                {props.preloader === "loading" ? <LoadingSvg/> : null}

                <img className={s.logo} src={logo} alt="logo"/>

                <h2 className={s.title}>Sign In</h2>

                <span  className={s.error}>{props.dataLogin.errorMessage}</span>

                <form className={s.form}>
                    <SuperInputText type={'email'}
                                    onChange={props.onChangeEmailHandler}
                                    label={'Email'}
                    />

                    <SuperInputText type={'password'}
                                    onChange={props.onChangePasswordHandler}
                                    label={'Password'}
                    />
                    <SuperCheckbox type={'checkbox'}
                                   onChange={props.onChangeRememberMeHandler}
                    />

                    <NavLink to={'/forgot'} className={s.forgot}>Forgot Password</NavLink>

                    <SuperButton disabled={props.dataLogin.loginButtonDisable}
                                 className={s.loginBtn}
                                 onClick={props.addUserData}>Login
                    </SuperButton>

                    <span className={s.account}>Don't have an account?</span>
                </form>

                <NavLink className={s.reg} to={'/registration'}>Sign up</NavLink>

            </div>

        </div>
    )
}