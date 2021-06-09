import React, {ChangeEvent, useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {setErrorAC, setRegistrationDataTC} from "../../../../bll/reducers/register-reducer";
import style from "./RegisterPage_vit.module.css";
import {AppRootStateType} from "../../../../bll/store";
import {Redirect, useHistory} from "react-router-dom";
import {Register} from "./Register";
import {RequestStatusType} from "../../../../bll/reducers/app-reduser";

export const RegisterContainer = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [secondPassword, setSecondPassword] = useState("")
    const [isChecked, setIsChek] = useState(false)

    const error = useSelector<AppRootStateType, string>(state => state.register.error)
    const requestStatus = useSelector<AppRootStateType, RequestStatusType>(state => state.app.requestStatus)
    const registrationSuccess = useSelector<AppRootStateType>(state => state.register.registrationSuccess)

    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(setErrorAC(''))
    }, [email, password, secondPassword])

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }
    const onChangeSecondPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setSecondPassword(e.currentTarget.value)
    }
    const viewPassword = () => {
        setIsChek(!isChecked)
    }
    const closeRegister = () => {
        history.push('/login')
    }

    if(registrationSuccess){
        return <Redirect to='/login'/>
    }

    const onSubmit = () => {
        if(password === secondPassword){
            dispatch(setRegistrationDataTC(email, password))
        }else if(!secondPassword){
            dispatch(setErrorAC("Please fill in the confirm password field"))
        }else{
            dispatch(setErrorAC("Passwords don't match"))
        }
    }

    return (
        <div className={style.registerPage}>
            <Register
                error={error}
                requestStatus={requestStatus}
                isChecked={isChecked}
                onChangeEmail={onChangeEmail}
                onChangePassword={onChangePassword}
                onChangeSecondPassword={onChangeSecondPassword}
                viewPassword={viewPassword}
                closeRegister={closeRegister}
                onSubmit={onSubmit}
            />
        </div>
    )
}
