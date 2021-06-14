import React from 'react';
import s from './_addNewPack.module.scss';




export const AddNewPack = () => {
    return (
        <div className={s.wrap}>

           <div className={s.card}>

                <div className={s.titleWrap}>
                    <h2 className={s.title}>Add new pack</h2>
                    <a className={s.closeWrap} href="#">
                        <span className={s.close}></span>
                        
                    </a>
                </div>
               

                <div className={s.inputWrap}>
                    <label className={s.label}>Name pack</label>
                    <input className={s.input} type="text"/>

                </div>

                <div className={s.btnWrap}>

                    <button className={s.btn}>Cancel</button>
                    <button className={s.btn}>Save</button>

                </div>

           </div>
            

        </div>
    )
}