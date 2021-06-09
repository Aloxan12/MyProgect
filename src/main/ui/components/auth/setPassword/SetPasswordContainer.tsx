import React, {ChangeEvent, useState} from 'react'
import {SetPassword} from "./SetPassword";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../../bll/store";
import {RequestStatusType} from "../../../../bll/reducers/app-reduser";
import {setNewPasswordTC} from "../../../../bll/reducers/setPassword-reducer";
import {Redirect, useParams} from 'react-router-dom';

export const SetPasswordContainer = () => {

    const [newPassword, setNewPassword] = useState("")
    const [isChecked, setIsChek] = useState(false)

    const requestStatus = useSelector<AppRootStateType, RequestStatusType>(state => state.app.requestStatus)
    const error = useSelector<AppRootStateType, string>(state => state.setPassword.error)
    const isSuccessful = useSelector<AppRootStateType, boolean>(state => state.setPassword.isSuccessful)

    const {token} = useParams<{ token: string }>()

    const dispatch = useDispatch()

    const onChangeNewPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setNewPassword(e.currentTarget.value)
    }
    const viewPassword = () => {
        setIsChek(!isChecked)
    }
    const onSubmit = () => {
        dispatch(setNewPasswordTC(newPassword, token))
    }

    if(isSuccessful){
        return <Redirect to={"/login"}/>
    }

    return (
        <div>
            <SetPassword
                error={error}
                isChecked={isChecked}
                requestStatus={requestStatus}
                onChangeNewPassword={onChangeNewPassword}
                onSubmit={onSubmit}
                viewPassword={viewPassword}
            />
        </div>
    )
}