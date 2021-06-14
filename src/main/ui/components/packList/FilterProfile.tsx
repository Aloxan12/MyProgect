import React from 'react';
import s from './_packListFilterProfile.module.scss';
import user from './../../../../assets/img/profilImg.png';




export const FilterProfile = () => {
    return (
        <div className={s.filter}>

            <div className={s.userInfo}>
                <img className={s.userImg} src={user} alt="user img"/>
                <span className={s.userName}>Ivan Ivanov</span>
                <span className={s.userProf}>Front-end developer</span>
                <button className={s.btn}>Edit profile</button>

            </div>






            <div className={s.content}>
                    sdfsdfdsf
                <span className={s.filterSpan}>Number of cards</span>

            </div>



        </div>
    )
}