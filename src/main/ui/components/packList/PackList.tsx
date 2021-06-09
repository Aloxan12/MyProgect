import React from 'react';
import s from './_packList.module.scss'
import logo from './../../../../assets/img/logo.png'
import card from './../../../../assets/img/packList.png'
import user from './../../../../assets/img/usre.png'
import {CardsPacksContainer} from "../packs/CardsPacksContainer";
import { LoadingSvg } from '../../common/loading/LoadingSvg';
import { PageNumber } from './PageNumber';
import { Filter } from './Filter';




export const PackList = () => {
    return (
        <div className={s.packListWrap}>
            
            <div className={s.header}>
                <div className={s.container}>

                    <div className={s.headerInner}>

                        <div className={s.logoWrap}>
                            <img className={s.logo} src={logo}/>
                        </div>

                        <div className={s.Cards}>
                            
                            <input className={s.input1} checked type="radio" name="name" id="tab1"/>
                            <input className={s.input2} type="radio" name="name" id="tab2"/>                                 
        
                            <label className={s.packList} htmlFor="tab1">                                             
                                <img className={s.packListImg} src={card}/>
                                <span className={s.packListSpan}>Pack List</span>
                            </label>

                            <label className={s.profile} htmlFor="tab2" >
                                <img className={s.profiltImg} src={user}/>
                                <span className={s.profileSpan}>Profile</span>
                            </label>

                            <div className={s.main}>

                               <Filter/>

                                <div className={s.content}>

                                    <h2 className={s.packListTitle}>Packs list</h2>
                                    <form className={s.wrap}>
                                        <input className={s.input} type="text" placeholder="Searh..."/>
                                        <button className={s.btn}>Add new pack</button>
                                    
                                    </form>

                                    <CardsPacksContainer/>
                                    
                                    <PageNumber/>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            {/* <LoadingSvg/> */}

           

            

        </div>
    )
}