import React from 'react';
import s from './_pageNumber.module.scss';




export const PageNumber = () => {
    return (
        <div className={s.wrap}>
            
            <div className={s.numbers}>

                <a className={s.arrow}></a>

                <a className={s.numb}>1</a>
                <a className={s.numb}>2</a>
                <a className={s.numb}>3</a>
                <a className={s.numb}>4</a>
                <a className={s.numb}>5</a>
                <a className={s.numb}>...</a>
                <a className={s.numb}>7</a>

                <a className={s.arrowEnd}></a>
            </div>

            <div className={s.selectWrap}>
                <span className={s.selectSpan}>Show</span>
                <select className={s.select}>
                    <option>10</option>
                    <option>40</option>
                    <option>100</option>
                </select>
                <span className={s.selectSpan}>Cards per Page</span>
            </div>
            

        </div>
    )
}