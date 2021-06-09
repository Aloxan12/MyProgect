import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {forgotPasswordTC} from "../../../../bll/reducers/forgotPassword-reducer";
import {AppRootStateType} from "../../../../bll/store";
import {ForgotPassword} from "./ForgotPassword";
import {Redirect} from "react-router-dom";

export const ForgotPasswordContainer = () => {
    const [email, setEmail] = useState<string>('')
    const from = 'test-front-admin vsmaliakou@yandex.by'
    const message = `<div style="background-color: lime; padding: 15px">	
	password recovery link: 
	<a href='https://vsmaliakou.github.io/friday#/set-new-password/$token$'>
    Link</a></div>`

    const error = useSelector<AppRootStateType, string>(state=> state.forgotPassword.error)
    const requestStatus = useSelector<AppRootStateType, string>(state=> state.app.requestStatus)
    const enterNewPassword = useSelector<AppRootStateType, boolean>(state=> state.forgotPassword.enterNewPassword)
    const dispatch = useDispatch()

    const addNewPassword =()=>{
        dispatch(forgotPasswordTC(email,from, message))
    }

    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }
    if(enterNewPassword){
        return <Redirect to='/check-email'/>
    }
    return (
        <div>
            <ForgotPassword addNewPassword={addNewPassword}
                            requestStatus={requestStatus}
                            error={error}
                            onChangeEmailHandler={onChangeEmailHandler} />
        </div>
    )
}