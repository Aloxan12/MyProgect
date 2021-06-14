import React from 'react';
import s from './_learnQuestion.module.scss';




export const LearnQuestion = () => {
    return (
        

            <div className={s.card}>

                <div className={s.titleWrap}>
                    <h2 className={s.title}>Learn “Pack Name”</h2>
                   
                </div>
               

                <div className={s.spanWrap}>
                   <span className={s.span}> <strong>Question: </strong>“How "This" works in JavaScript?”</span>

                </div>

                <div className={s.btnWrap}>

                    <button className={s.btn}>Cancel</button>
                    <button className={s.btn}>Save</button>

                </div>

            </div>
            

        
    )
}