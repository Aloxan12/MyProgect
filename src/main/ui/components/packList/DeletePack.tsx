import React from 'react';
import s from './_deletePack.module.scss';




export const DeletePack = () => {
    return (
        <div className={s.wrap}>

           <div className={s.card}>

                <div className={s.titleWrap}>
                    <h2 className={s.title}>Delete Pack</h2>
                    <a className={s.closeWrap} href="#">
                        <span className={s.close}></span>
                        
                    </a>
                </div>
               

                <span className={s.text}>
                    Do you really want to remove <strong>Pack Name - Name Pack? </strong> 
                    All cards will be excluded from this course.
                </span>

                <div className={s.btnWrap}>

                    <button className={s.btn}>Cancel</button>
                    <button className={s.btn}>Delete</button>

                </div>

           </div>
            

        </div>
    )
}