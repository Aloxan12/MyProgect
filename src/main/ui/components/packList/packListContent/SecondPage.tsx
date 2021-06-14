import React from 'react';
import s from './_secondPage.module.scss'







export const SecondPage = () => {
    return (
        <div className={s.main}>
           
            

                <div className={s.titleWrap}>
                    <a className={s.close}></a>
                    <h2 className={s.packListTitle}>Pack Name</h2>
                </div>
                
                <form className={s.inputWrap}>
                    <input className={s.input} type="text" placeholder="Searh..."/>
                    <button className={s.btn}>Add new card</button>
                                        
                </form>

                <div className={s.spanWrap}>
                    <span className={s.span}>This pack is empty. Click add new card to fill this pack</span>
                </div>

              

            

        </div>
        
        
    )
}