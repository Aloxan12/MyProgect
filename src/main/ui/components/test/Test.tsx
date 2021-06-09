import React from 'react';
import style from './Test.module.css'
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../common/c3-SuperCheckbox/SuperCheckbox";

export const Test = () => {
    return (
        <div className={style.test}>
            <div><SuperInputText setError={x => x} label={"label"}/></div>
            <div><SuperButton/></div>
            <div><SuperCheckbox/></div>
        </div>
    )
}