import React from 'react';
import s from './_addNewCard.module.scss';




export const AddNewCard = () => {
    return (

        <div className={s.card}>

            <h2 className={s.title}>Card Info</h2>

            <form className={s.inputWrap}>

                <label className={s.label}>Question</label>
                <input className={s.input} type="text"/>
                <button className={s.btnForm}>+  Attach file</button>

            </form>

            <form className={s.inputWrap}>

                <label className={s.label}>Answer</label>
                <input className={s.input} type="text"/>
                <button className={s.btnForm}>+ Attach file</button>

            </form>

                <div className={s.btnWrap}>

                    <button className={s.btn}>Cancel</button>
                    <button className={s.btn}>Save</button>

                </div>

           </div>
            

        
    )
}