import React from 'react';
import s from './Filter.module.scss';

type FilterPropsType = {
    getMyPacks: () => void
    getAllPacks: () => void
}

export const Filter: React.FC<FilterPropsType> = ({getMyPacks, getAllPacks}) => {

    return (
        <div className={s.filter}>
            <h4 className={s.filterTitle}>Show packs cards</h4>
            <div className={s.filterWrap}>
                <button onClick={getMyPacks}>MY</button>
                <button onClick={getAllPacks}>All</button>

                {/*<input className={s.tab1} checked type="radio" name="tab" id="id1"/>*/}
                {/*<input className={s.tab2} type="radio" name="tab" id="id2"/>                                 */}

                {/*<label className={s.labelMy} htmlFor="id1">MY</label>*/}
                {/*<label className={s.labelAll} htmlFor="id2">All</label>*/}

                

                {/*<div className={s.contentMy}>*/}
                {/*    assdvsdvvsd*/}

                {/*    <span className={s.filterSpan}>Number of cards</span>*/}
                {/*</div>*/}

                {/*<div className={s.contentAll}>*/}
                {/*    null*/}
                {/*    */}
                {/*</div>*/}

            </div>
        </div>
    )
}