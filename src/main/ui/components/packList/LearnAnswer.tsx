import React from 'react';
import s from './_learnAnswer.module.scss'




export const LearnAnswer = () => {
    return (
        

            <div className={s.card}>

                
                    <h2 className={s.title}>Learn “Pack Name””</h2>
                   
                
               

                <div className={s.spanWrap}>
                   <span className={s.span}> <strong>Question: </strong>“How "This" works in JavaScript?”</span>
                   <span className={s.span}> <strong>Answer: </strong>“This is how "This" works in JavaScript”</span>

                </div>

                <form className={s.form}>

                    <span className={s.listSpan}>Rate yourself:</span>

                    <ul className={s.list}>

                        <li className={s.item}>
                            <input className={s.input} name="q" type="radio" id="1"/>
                            <label className={s.label} htmlFor="1">Did not know</label>
                        </li>

                        <li className={s.item}>
                            <input className={s.input} name="q" type="radio" id="2"/>
                            <label className={s.label} htmlFor="2">Forgot</label>
                        </li>

                        <li className={s.item}>
                            <input className={s.input} name="q" type="radio" id="3"/>
                            <label className={s.label} htmlFor="3">A lot of thought</label>
                        </li>

                        <li className={s.item}>
                            <input className={s.input} name="q" type="radio" id="4"/>
                            <label className={s.label} htmlFor="4">Сonfused</label>
                        </li>

                        <li className={s.item}>
                            <input className={s.input} name="q" type="radio" id="5"/>
                            <label className={s.label} htmlFor="5">Knew the answer</label>
                        </li>

                    </ul>

                    <div className={s.btnWrap}>

                    <button className={s.btn}>Cancel</button>
                    <button className={s.btn}>Save</button>

                    </div>

                </form>

               

            </div>
            

        
    )
}