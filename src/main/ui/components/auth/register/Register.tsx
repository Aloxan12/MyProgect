import React, {ChangeEvent} from 'react';
import s from './Register.module.scss';
import logo from './../../../../../assets/img/logo.png';
import SuperInputText from "../../../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../common/c2-SuperButton/SuperButton";
import { RequestStatusType } from '../../../../bll/reducers/app-reduser';
import { LoadingSvg } from '../../../common/loading/LoadingSvg';

type RegisterPropsType = {
    error: string
    requestStatus: RequestStatusType
    isChecked: boolean
    onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void
    onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeSecondPassword: (e: ChangeEvent<HTMLInputElement>) => void
    viewPassword: () => void
    closeRegister: () => void
    onSubmit: () => void
}

export const Register: React.FC<RegisterPropsType> = (props) => {
    return (
        <div className={s.reg}>
           <div className={s.card}>
                <img className={s.logo} src={logo} alt="logo"/>

                <h2 className={s.title}>Sign Up</h2>

                <form className={s.form}>

                    {props.error && <span className={s.error}>{props.error}</span>}
                    {props.requestStatus === "loading" && <LoadingSvg/>}
                    <SuperInputText
                        type={"email"}
                        onChange={props.onChangeEmail}
                        label={"Email"}
                    />
                    <SuperInputText
                        type={props.isChecked ? "text" : "password"}
                        onChange={props.onChangePassword}
                        label={"Password"}
                    />
                    <SuperInputText
                        type={props.isChecked ? "text" : "password"}
                        onChange={props.onChangeSecondPassword}
                        label={"Confirm password"}
                    />
                    <span className={s.view} onClick={props.viewPassword}>View password</span>

                    <div className={s.btnWrap}>

                        <SuperButton className={s.cancel} onClick={props.closeRegister}>Cancel</SuperButton>
                        <SuperButton
                            disabled={props.requestStatus === "loading" ? true : false}
                            className={s.register}
                            onClick={props.onSubmit}>Sign up</SuperButton>

                    </div>

                </form>

            </div>
        </div>
    )
}