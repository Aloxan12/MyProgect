import React from 'react';
import s from './_packListFilter.module.scss';




export const Filter = () => {
    return (
        <div className={s.filter}>

            <h4 className={s.filterTitle}>Show packs cards</h4>
                                    
            <div className={s.filterWrap}>
                <input className={s.tab1} checked type="radio" name="tab" id="id1"/>
                <input className={s.tab2} type="radio" name="tab" id="id2"/>                                 
        
                <label className={s.labelMy} htmlFor="id1">MY</label>
                <label className={s.labelAll} htmlFor="id2">All</label>

                

                <div className={s.contentMy}>
                    sdfsdfdsf

                    <span className={s.filterSpan}>Number of cards</span>
                </div>

                <div className={s.contentAll}>
                    1234556445
                    <span className={s.filterSpan}>Number of cards</span>
                </div>

            </div>

            

        </div>
    )
}