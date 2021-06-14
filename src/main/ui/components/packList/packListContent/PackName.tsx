import React from 'react';
import { CardsPacksContainer } from '../../packs/packListPage/packList/cardsPacks/CardsPacksContainer';
// import { PageNumber } from '../../../common/Paginator/PageNumber';
import s from './_packName.module.scss'







export const PackName = () => {
    return (
        <div className={s.main}>

            <div className={s.titleWrap}>
                <a className={s.close}></a>
                <h2 className={s.packListTitle}>Pack Name</h2>
            </div>
                
             <form className={s.inputWrap}>
                <input className={s.input} type="text" placeholder="Searh..."/>
            </form>

            <div className={s.wrap}>
                <table className={s.table}>

                    <tr className={s.title}>
                        <th className={s.col}>
                            <span className={s.colSpan}>Question</span>
                        </th>
                        <th className={s.col}>
                            <span className={s.colSpan}>Answer</span>
                        </th>
                        <th className={s.col}>
                            <select className={s.select}>
                                <option>Last Updated</option>
                                <option>First Updated</option>
                            </select>
                        </th>
                        <th className={s.col}>
                            <span className={s.colSpan}>Grade</span>
                        </th>
                        
                    </tr>

                    <tr className={s.row}>
                        <th className={s.col}>
                            <span className={s.colSpan}>Pack Name - Name Pack</span>
                        </th>
                        <th className={s.col}>
                            <span className={s.colSpan}>This is how "This" works in JavaScript</span>
                        </th>
                        <th className={s.col}>
                           <span className={s.colSpan}>18.03.2021</span>
                        </th>
                        <th className={s.col}>
                            <span className={s.colSpan}></span>
                        </th>
                       
                    </tr>
                    <tr className={s.row}>
                        <th className={s.col}>
                            <span className={s.colSpan}>Pack Name - Name Pack</span>
                        </th>
                        <th className={s.col}>
                            <span className={s.colSpan}>This is how "This" works in JavaScript</span>
                        </th>
                        <th className={s.col}>
                           <span className={s.colSpan}>18.03.2021</span>
                        </th>
                        <th className={s.col}>
                            <span className={s.colSpan}></span>
                        </th>
                       
                    </tr>
                    <tr className={s.row}>
                        <th className={s.col}>
                            <span className={s.colSpan}>Pack Name - Name Pack</span>
                        </th>
                        <th className={s.col}>
                            <span className={s.colSpan}>This is how "This" works in JavaScript</span>
                        </th>
                        <th className={s.col}>
                           <span className={s.colSpan}>18.03.2021</span>
                        </th>
                        <th className={s.col}>
                            <span className={s.colSpan}></span>
                        </th>
                       
                    </tr>
                    
                    
                </table>


            </div>



        </div>
        
        
    )
}