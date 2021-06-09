import React from 'react';
import s from './EmailPassword.module.scss';
import logo from './../../../../../assets/img/logo.png';
import email from './../../../../../assets/img/ce.png';


export const EmailPassword = () => {
    return (
        <div className={s.forgot}>
            <div className={s.card}>

                <img className={s.logo} src={logo} alt="logo"/>
                <img className={s.email} src={email} alt="logo"/>

                <h2 className={s.title}>Check Email</h2>

                <span className={s.checkText}>We’ve sent an Email with instructions to example@mail.comgit</span>


                

            </div>
        </div>
    )
}