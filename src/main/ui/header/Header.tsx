import React from "react";
import style from './Header.module.css'
import {cards, forgot, login, packList, packs, profile, registration} from "../common/links";

export const Header = () => {
    return (
        <div className={style.header}>
            {login}
            {registration}
            {forgot}
            {profile}
            {packs}
            {cards}
            {packList}
        </div>
    )
}