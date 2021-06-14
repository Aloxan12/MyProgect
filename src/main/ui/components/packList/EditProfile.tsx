import React from 'react';
import s from './_editProfile.module.scss';
import user from './../../../../assets/img/profilImg.png'
import SuperInputText from '../../common/c1-SuperInputText/SuperInputText';

type PropsType = {
    
   
}


export const EditProfile: React.FC<PropsType> = (props) =>{
    return (
        

            <div className={s.card}>

                <div className={s.titleWrap}>
                    <h2 className={s.title}>Personal Information</h2>
                   
                </div>
               

                <div className={s.imgWrap}>
                    <img className={s.profile} src={user}/>
                    <a className={s.imgLink}></a>
                   

                </div>

                <form className={s.form}>
                    <SuperInputText type={'text'}
                                    label={'Nickname'}/>
                    <SuperInputText type={'email'}
                                    label={'Email'}/>
                </form>

                <div className={s.btnWrap}>

                    <button className={s.btn}>Cancel</button>
                    <button className={s.btn}>Save</button>

                </div>

            </div>
            

        
    )
}